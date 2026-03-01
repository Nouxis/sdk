/**
 * Nouxis program error codes.
 * Anchor error codes start at 6000 + index.
 */
export enum NouxisErrorCode {
  MetadataUriTooLong = 6000,
  VersionTooLong = 6001,
  DescriptionTooLong = 6002,
  ResourceTooLong = 6003,
  EndpointTooLong = 6004,
  InvalidFeedbackScore = 6005,
  InvalidValidationScore = 6006,
  TooManyTags = 6007,
  TooManyAllowedTokens = 6008,
  TooManyAllowedPrograms = 6009,
  AgentInactive = 6010,
  AgentAlreadyActive = 6011,
  Unauthorized = 6012,
  InvalidFeedbackAuth = 6013,
  FeedbackAlreadyRevoked = 6014,
  DelegationInactive = 6015,
  DelegationExpired = 6016,
  DelegationExhausted = 6017,
  InsufficientPermission = 6018,
  ExceedsPerTxLimit = 6019,
  ExceedsTotalLimit = 6020,
  TokenNotAllowed = 6021,
  ProgramNotAllowed = 6022,
  SubDelegationExceedsParent = 6023,
  CannotRedelegate = 6024,
  MaxDelegationDepthExceeded = 6025,
  DelegationOwnerVersionMismatch = 6026,
  PaymentRequirementInactive = 6027,
  InsufficientPayment = 6028,
  PaymentReplay = 6029,
  ServiceAlreadyExists = 6030,
  NotNftHolder = 6031,
  ValidationAlreadyResponded = 6032,
  ValidatorMismatch = 6033,
  ModulePaused = 6034,
  SettlementFeeTooHigh = 6035,
  InsufficientRegistrationFee = 6036,
  DelegationRequiredForDelegatedMode = 6037,
  FacilitatorRequired = 6038,
  FacilitatorNotApproved = 6039,
  InsufficientDelegateAllowance = 6040,
  Ed25519InstructionNotFound = 6041,
  InvalidEd25519InstructionData = 6042,
  TokenMintMismatch = 6043,
  PaymentAmountMismatch = 6044,
  MathOverflow = 6045,
  AttestationUnauthorized = 6046,
  PayToRedirectNotAllowed = 6047,
  ReceiptNotSettled = 6048,
  ReceiptAgentMismatch = 6049,
  ReceiptPayerMismatch = 6050,
}

const ERROR_MESSAGES: Record<number, string> = {
  [NouxisErrorCode.MetadataUriTooLong]:
    "Metadata URI exceeds maximum length of 200 characters",
  [NouxisErrorCode.VersionTooLong]:
    "Version string exceeds maximum length of 20 characters",
  [NouxisErrorCode.DescriptionTooLong]:
    "Description exceeds maximum length of 200 characters",
  [NouxisErrorCode.ResourceTooLong]:
    "Resource path exceeds maximum length of 200 characters",
  [NouxisErrorCode.EndpointTooLong]:
    "Endpoint URL exceeds maximum length of 200 characters",
  [NouxisErrorCode.InvalidFeedbackScore]:
    "Feedback score must be between 0 and 100",
  [NouxisErrorCode.InvalidValidationScore]:
    "Validation score must be between 0 and 100",
  [NouxisErrorCode.TooManyTags]: "Too many tags (maximum 5)",
  [NouxisErrorCode.TooManyAllowedTokens]:
    "Too many allowed tokens (maximum 5)",
  [NouxisErrorCode.TooManyAllowedPrograms]:
    "Too many allowed programs (maximum 5)",
  [NouxisErrorCode.AgentInactive]: "Agent is not active",
  [NouxisErrorCode.AgentAlreadyActive]: "Agent is already active",
  [NouxisErrorCode.Unauthorized]:
    "Unauthorized: caller is not the owner and has no valid delegation",
  [NouxisErrorCode.InvalidFeedbackAuth]:
    "Invalid feedback authorization signature",
  [NouxisErrorCode.FeedbackAlreadyRevoked]: "Feedback already revoked",
  [NouxisErrorCode.DelegationInactive]: "Delegation is not active",
  [NouxisErrorCode.DelegationExpired]: "Delegation has expired",
  [NouxisErrorCode.DelegationExhausted]: "Delegation has no remaining uses",
  [NouxisErrorCode.InsufficientPermission]:
    "Delegation does not have the required permission",
  [NouxisErrorCode.ExceedsPerTxLimit]:
    "Transaction amount exceeds delegation per-transaction limit",
  [NouxisErrorCode.ExceedsTotalLimit]:
    "Cumulative spend would exceed delegation total limit",
  [NouxisErrorCode.TokenNotAllowed]:
    "Token not allowed by delegation constraints",
  [NouxisErrorCode.ProgramNotAllowed]:
    "Program not allowed by delegation constraints",
  [NouxisErrorCode.SubDelegationExceedsParent]:
    "Sub-delegation constraints must be within parent constraints",
  [NouxisErrorCode.CannotRedelegate]:
    "Delegator cannot redelegate (can_redelegate is false)",
  [NouxisErrorCode.MaxDelegationDepthExceeded]:
    "Maximum delegation depth exceeded (max 3 levels)",
  [NouxisErrorCode.DelegationOwnerVersionMismatch]:
    "Delegation owner_version does not match agent (NFT was transferred)",
  [NouxisErrorCode.PaymentRequirementInactive]:
    "Payment requirement is not active",
  [NouxisErrorCode.InsufficientPayment]: "Payment amount is insufficient",
  [NouxisErrorCode.PaymentReplay]: "Payment ID already used (replay detected)",
  [NouxisErrorCode.ServiceAlreadyExists]:
    "Service type already registered for this agent",
  [NouxisErrorCode.NotNftHolder]: "Caller does not hold the agent NFT",
  [NouxisErrorCode.ValidationAlreadyResponded]:
    "Validation request already responded",
  [NouxisErrorCode.ValidatorMismatch]:
    "Validator does not match the validation request",
  [NouxisErrorCode.ModulePaused]: "Protocol module is paused",
  [NouxisErrorCode.SettlementFeeTooHigh]:
    "Settlement fee basis points exceeds maximum (1000 = 10%)",
  [NouxisErrorCode.InsufficientRegistrationFee]:
    "Insufficient SOL for registration fee",
  [NouxisErrorCode.DelegationRequiredForDelegatedMode]:
    "Delegated settlement requires a delegation account",
  [NouxisErrorCode.FacilitatorRequired]:
    "Delegated settlement requires facilitator as signer",
  [NouxisErrorCode.FacilitatorNotApproved]:
    "Facilitator is not an approved SPL Token delegate",
  [NouxisErrorCode.InsufficientDelegateAllowance]:
    "SPL Token delegate allowance insufficient",
  [NouxisErrorCode.Ed25519InstructionNotFound]:
    "Ed25519 program instruction not found in transaction",
  [NouxisErrorCode.InvalidEd25519InstructionData]:
    "Invalid Ed25519 instruction data",
  [NouxisErrorCode.TokenMintMismatch]:
    "Token mint does not match payment requirement or token accounts",
  [NouxisErrorCode.PaymentAmountMismatch]:
    "Payment amount does not match exact requirement",
  [NouxisErrorCode.MathOverflow]: "Arithmetic overflow",
  [NouxisErrorCode.AttestationUnauthorized]:
    "Attestation mode requires protocol authority or facilitator",
  [NouxisErrorCode.PayToRedirectNotAllowed]:
    "Delegates cannot redirect payment destination away from agent owner",
  [NouxisErrorCode.ReceiptNotSettled]: "Payment receipt has not been settled",
  [NouxisErrorCode.ReceiptAgentMismatch]:
    "Payment receipt agent does not match feedback target",
  [NouxisErrorCode.ReceiptPayerMismatch]:
    "Payment receipt payer does not match reviewer",
};

export class NouxisError extends Error {
  constructor(
    public readonly code: NouxisErrorCode,
    message?: string
  ) {
    super(message ?? ERROR_MESSAGES[code] ?? `Unknown error: ${code}`);
    this.name = "NouxisError";
  }
}

/**
 * Parse an Anchor error into a typed NouxisError.
 * Returns null if the error is not an Nouxis program error.
 */
export function parseNouxisError(err: unknown): NouxisError | null {
  if (err == null || typeof err !== "object") return null;

  const errObj = err as Record<string, unknown>;

  // Anchor AnchorError format
  if (
    "error" in errObj &&
    typeof errObj.error === "object" &&
    errObj.error != null
  ) {
    const inner = errObj.error as Record<string, unknown>;
    if (typeof inner.errorCode === "object" && inner.errorCode != null) {
      const codeObj = inner.errorCode as Record<string, unknown>;
      if (typeof codeObj.number === "number") {
        const code = codeObj.number as NouxisErrorCode;
        if (code >= 6000 && code <= 6050) {
          return new NouxisError(code, codeObj.code as string);
        }
      }
    }
  }

  // Fallback: check error message for hex error code
  const msg = String(err);
  const hexMatch = msg.match(/0x([0-9a-fA-F]+)/);
  if (hexMatch) {
    const code = parseInt(hexMatch[1], 16);
    if (code >= 6000 && code <= 6050) {
      return new NouxisError(code as NouxisErrorCode);
    }
  }

  return null;
}
