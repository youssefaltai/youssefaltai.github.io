"use server";

import client from "../mongodb";
import { ContactFormValuesType } from "./FormContext";

export async function sendMessageAction(values: ContactFormValuesType) {
  const mongoClient = await client.connect();

  const database = mongoClient.db("mywebsite");
  const messages = database.collection("messages");

  await messages.insertOne({
    ...values,
    createdAt: new Date(),
  });

  mongoClient.close();
}
