import { describe, expect, it } from "vitest";
import { contactFormSchema, type ContactFormValues } from "./contact.types";

const valid: ContactFormValues = {
  firstName: "Ada",
  lastName: "Lovelace",
  email: "ada@example.com",
  phone: "+44 20 7946 0958",
  dateOfBirth: "1990-12-10",
  service: "trial",
  message: "I would like a trial.",
  agree: true,
};

const issueFor = (values: ContactFormValues, field: keyof ContactFormValues) => {
  const result = contactFormSchema.safeParse(values);
  return result.success
    ? undefined
    : result.error.issues.find((issue) => issue.path[0] === field)?.message;
};

describe("contactFormSchema", () => {
  it("accepts a complete form", () => {
    expect(contactFormSchema.safeParse(valid).success).toBe(true);
  });

  it("explains what is wrong with each field", () => {
    expect(issueFor({ ...valid, firstName: "  " }, "firstName")).toBe(
      "Please enter your first name.",
    );
    expect(issueFor({ ...valid, email: "nope" }, "email")).toBe(
      "Please enter a valid email address.",
    );
    expect(issueFor({ ...valid, phone: "abc" }, "phone")).toBe(
      "Please enter a valid phone number.",
    );
    expect(issueFor({ ...valid, service: "" }, "service")).toBe(
      "Please choose a service.",
    );
    expect(issueFor({ ...valid, agree: false }, "agree")).toBe(
      "Please confirm that you agree to continue.",
    );
  });
});
