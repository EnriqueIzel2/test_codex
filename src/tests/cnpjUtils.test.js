import { describe, expect, it } from "vitest";
import { validateCNPJ, isValidCnpjFormat } from "../pages/Exercise1/utils";

describe("validates CNPJ format", () => {
  it("should return true if the CNPJ with special characters has a valid format", () => {
    expect(isValidCnpjFormat("86.313.809/0001-99")).toBe(true);
  });

  it("should return false if the CNPJ with special characters has a non-valid format", () => {
    expect(isValidCnpjFormat("86.313/809-0001/99")).toBe(false);
  });

  it("should return false if the CNPJ with special characters has a non-valid format", () => {
    expect(isValidCnpjFormat("86.313809-0001/99")).toBe(false);
  });

  it("should return true if the CNPJ without special characters has a valid format", () => {
    expect(isValidCnpjFormat("26150225000118")).toBe(true);
  });

  it("should return false if the CNPJ without special characters has a non-valid format", () => {
    expect(isValidCnpjFormat("2615022500011800")).toBe(false);
  });
});

describe("validates CNPJ", () => {
  it("should return false if the CNPJ is not valid", () => {
    expect(validateCNPJ([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toBe(
      false
    );
  });

  it("should return true if the CNPJ is valid", () => {
    expect(validateCNPJ([8, 6, 3, 1, 3, 8, 0, 9, 0, 0, 0, 1, 9, 9])).toBe(true);
  });
});
