import { CalculatePasswordStrength } from "../src/password-strength-checker";

describe("Check how strong password is.", () => {
  let strengthChecker: CalculatePasswordStrength;

  beforeEach(() => {
    strengthChecker = new CalculatePasswordStrength();
  });

  test("Check very weak password has less than 4 characters", () => {
    const result = CalculatePasswordStrength.evaluate('asdf')
    expect(result).toBe("Very Weak");
  });

  test("Check weak password", () => {
    const result = CalculatePasswordStrength.evaluate('asdfqweQ')
    expect(result).toBe("Weak");
  });

  test("Check moderate password", () => {
    const result = CalculatePasswordStrength.evaluate('!asdfqweQ')
    expect(result).toBe("Moderate");
  });

  test("Check strong password", () => {
    const result = CalculatePasswordStrength.evaluate('Asdf_15!gjtfyf.')
    expect(result).toBe("Strong");
  });

});
