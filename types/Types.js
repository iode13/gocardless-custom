"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MandatePdfAccountType = exports.MandateImportStatus = exports.MandateImportScheme = exports.MandateStatus = exports.MandateFundsSettlement = exports.MandateConsentParametersPeriodPeriod = exports.MandateAuthorisationSource = exports.InstalmentScheduleStatus = exports.InstalmentScheduleCurrency = exports.InstalmentScheduleInstalmentsIntervalUnit = exports.EventResourceType = exports.EventDetailsScheme = exports.EventDetailsOrigin = exports.EventInclude = exports.CustomerNotificationType = exports.CustomerNotificationActionTaken = exports.CustomerBankAccountAccountType = exports.CustomerSortField = exports.CustomerSortDirection = exports.CustomerCurrency = exports.CreditorBankAccountVerificationStatus = exports.CreditorBankAccountAccountType = exports.CreditorVerificationStatus = exports.CreditorSchemeIdentifierStatus = exports.CreditorSchemeIdentifierScheme = exports.CreditorSchemeIdentifierCurrency = exports.CreditorFxPayoutCurrency = exports.CreditorCreditorType = exports.BlockReasonType = exports.BlockBlockType = exports.BlockReferenceType = exports.BillingRequestTemplateMandateRequestVerify = exports.BillingRequestFlowPrefilledBankAccountAccountType = exports.BillingRequestStatus = exports.BillingRequestResourcesCustomerBankAccountAccountType = exports.BillingRequestPurposeCode = exports.BillingRequestPaymentRequestFundsSettlement = exports.BillingRequestMandateRequestVerify = exports.BillingRequestMandateRequestConstraintsPeriodicLimitPeriod = exports.BillingRequestMandateRequestConstraintsPeriodicLimitAlignment = exports.BillingRequestMandateRequestAuthorisationSource = exports.BillingRequestActionType = exports.BillingRequestActionStatus = exports.BillingRequestActionInstitutionGuessStatus = exports.BillingRequestActionBankAuthorisationAuthorisationType = exports.BillingRequestActionBankAuthorisationAdapter = exports.BillingRequestNotificationType = exports.BillingRequestAccountType = exports.BankDetailsLookupAvailableDebitScheme = exports.BankAuthorisationAuthorisationType = void 0;
exports.SubscriptionStatus = exports.SubscriptionMonth = exports.SubscriptionIntervalUnit = exports.FxCurrency = exports.SchemeIdentifierStatus = exports.SchemeIdentifierScheme = exports.SchemeIdentifierCurrency = exports.RefundStatus = exports.RefundFxFxCurrency = exports.RefundRefundType = exports.RedirectFlowScheme = exports.RedirectFlowPrefilledBankAccountAccountType = exports.PayoutItemType = exports.PayoutItemTaxisCurrency = exports.PayoutItemInclude2020TaxCutover = exports.PayoutStatus = exports.PayoutPayoutType = exports.PayoutFxFxCurrency = exports.PayoutCurrency = exports.PaymentStatus = exports.PaymentFxFxCurrency = exports.PaymentCurrency = exports.PaymentSortField = exports.PaymentSortDirection = exports.PayerAuthorisationStatus = exports.PayerAuthorisationMandateScheme = exports.PayerAuthorisationBankAccountAccountType = exports.NegativeBalanceLimitCurrency = exports.MandatePdfSubscriptionFrequency = void 0;
var BankAuthorisationAuthorisationType;
(function (BankAuthorisationAuthorisationType) {
    BankAuthorisationAuthorisationType["Mandate"] = "mandate";
    BankAuthorisationAuthorisationType["Payment"] = "payment";
})(BankAuthorisationAuthorisationType = exports.BankAuthorisationAuthorisationType || (exports.BankAuthorisationAuthorisationType = {}));
var BankDetailsLookupAvailableDebitScheme;
(function (BankDetailsLookupAvailableDebitScheme) {
    BankDetailsLookupAvailableDebitScheme["Ach"] = "ach";
    BankDetailsLookupAvailableDebitScheme["Autogiro"] = "autogiro";
    BankDetailsLookupAvailableDebitScheme["Bacs"] = "bacs";
    BankDetailsLookupAvailableDebitScheme["Becs"] = "becs";
    BankDetailsLookupAvailableDebitScheme["BecsNz"] = "becs_nz";
    BankDetailsLookupAvailableDebitScheme["Betalingsservice"] = "betalingsservice";
    BankDetailsLookupAvailableDebitScheme["FasterPayments"] = "faster_payments";
    BankDetailsLookupAvailableDebitScheme["Pad"] = "pad";
    BankDetailsLookupAvailableDebitScheme["PayTo"] = "pay_to";
    BankDetailsLookupAvailableDebitScheme["SepaCore"] = "sepa_core";
})(BankDetailsLookupAvailableDebitScheme = exports.BankDetailsLookupAvailableDebitScheme || (exports.BankDetailsLookupAvailableDebitScheme = {}));
var BillingRequestAccountType;
(function (BillingRequestAccountType) {
    BillingRequestAccountType["Savings"] = "savings";
    BillingRequestAccountType["Checking"] = "checking";
})(BillingRequestAccountType = exports.BillingRequestAccountType || (exports.BillingRequestAccountType = {}));
var BillingRequestNotificationType;
(function (BillingRequestNotificationType) {
    BillingRequestNotificationType["Email"] = "email";
})(BillingRequestNotificationType = exports.BillingRequestNotificationType || (exports.BillingRequestNotificationType = {}));
var BillingRequestActionBankAuthorisationAdapter;
(function (BillingRequestActionBankAuthorisationAdapter) {
    BillingRequestActionBankAuthorisationAdapter["OpenBankingGatewayPis"] = "open_banking_gateway_pis";
    BillingRequestActionBankAuthorisationAdapter["PlaidAis"] = "plaid_ais";
    BillingRequestActionBankAuthorisationAdapter["OpenBankingGatewayAis"] = "open_banking_gateway_ais";
    BillingRequestActionBankAuthorisationAdapter["BankidAis"] = "bankid_ais";
    BillingRequestActionBankAuthorisationAdapter["BankPayRecurring"] = "bank_pay_recurring";
})(BillingRequestActionBankAuthorisationAdapter = exports.BillingRequestActionBankAuthorisationAdapter || (exports.BillingRequestActionBankAuthorisationAdapter = {}));
var BillingRequestActionBankAuthorisationAuthorisationType;
(function (BillingRequestActionBankAuthorisationAuthorisationType) {
    BillingRequestActionBankAuthorisationAuthorisationType["Payment"] = "payment";
    BillingRequestActionBankAuthorisationAuthorisationType["Mandate"] = "mandate";
})(BillingRequestActionBankAuthorisationAuthorisationType = exports.BillingRequestActionBankAuthorisationAuthorisationType || (exports.BillingRequestActionBankAuthorisationAuthorisationType = {}));
var BillingRequestActionInstitutionGuessStatus;
(function (BillingRequestActionInstitutionGuessStatus) {
    BillingRequestActionInstitutionGuessStatus["NotNeeded"] = "not_needed";
    BillingRequestActionInstitutionGuessStatus["Pending"] = "pending";
    BillingRequestActionInstitutionGuessStatus["Failed"] = "failed";
    BillingRequestActionInstitutionGuessStatus["Success"] = "success";
})(BillingRequestActionInstitutionGuessStatus = exports.BillingRequestActionInstitutionGuessStatus || (exports.BillingRequestActionInstitutionGuessStatus = {}));
var BillingRequestActionStatus;
(function (BillingRequestActionStatus) {
    BillingRequestActionStatus["Pending"] = "pending";
    BillingRequestActionStatus["Completed"] = "completed";
})(BillingRequestActionStatus = exports.BillingRequestActionStatus || (exports.BillingRequestActionStatus = {}));
var BillingRequestActionType;
(function (BillingRequestActionType) {
    BillingRequestActionType["ChooseCurrency"] = "choose_currency";
    BillingRequestActionType["CollectAmount"] = "collect_amount";
    BillingRequestActionType["CollectCustomerDetails"] = "collect_customer_details";
    BillingRequestActionType["CollectBankAccount"] = "collect_bank_account";
    BillingRequestActionType["BankAuthorisation"] = "bank_authorisation";
    BillingRequestActionType["ConfirmPayerDetails"] = "confirm_payer_details";
    BillingRequestActionType["SelectInstitution"] = "select_institution";
})(BillingRequestActionType = exports.BillingRequestActionType || (exports.BillingRequestActionType = {}));
var BillingRequestMandateRequestAuthorisationSource;
(function (BillingRequestMandateRequestAuthorisationSource) {
    BillingRequestMandateRequestAuthorisationSource["Web"] = "web";
    BillingRequestMandateRequestAuthorisationSource["Telephone"] = "telephone";
    BillingRequestMandateRequestAuthorisationSource["Paper"] = "paper";
})(BillingRequestMandateRequestAuthorisationSource = exports.BillingRequestMandateRequestAuthorisationSource || (exports.BillingRequestMandateRequestAuthorisationSource = {}));
var BillingRequestMandateRequestConstraintsPeriodicLimitAlignment;
(function (BillingRequestMandateRequestConstraintsPeriodicLimitAlignment) {
    BillingRequestMandateRequestConstraintsPeriodicLimitAlignment["Calendar"] = "calendar";
    BillingRequestMandateRequestConstraintsPeriodicLimitAlignment["CreationDate"] = "creation_date";
})(BillingRequestMandateRequestConstraintsPeriodicLimitAlignment = exports.BillingRequestMandateRequestConstraintsPeriodicLimitAlignment || (exports.BillingRequestMandateRequestConstraintsPeriodicLimitAlignment = {}));
var BillingRequestMandateRequestConstraintsPeriodicLimitPeriod;
(function (BillingRequestMandateRequestConstraintsPeriodicLimitPeriod) {
    BillingRequestMandateRequestConstraintsPeriodicLimitPeriod["Day"] = "day";
    BillingRequestMandateRequestConstraintsPeriodicLimitPeriod["Week"] = "week";
    BillingRequestMandateRequestConstraintsPeriodicLimitPeriod["Month"] = "month";
    BillingRequestMandateRequestConstraintsPeriodicLimitPeriod["Year"] = "year";
    BillingRequestMandateRequestConstraintsPeriodicLimitPeriod["Flexible"] = "flexible";
})(BillingRequestMandateRequestConstraintsPeriodicLimitPeriod = exports.BillingRequestMandateRequestConstraintsPeriodicLimitPeriod || (exports.BillingRequestMandateRequestConstraintsPeriodicLimitPeriod = {}));
var BillingRequestMandateRequestVerify;
(function (BillingRequestMandateRequestVerify) {
    BillingRequestMandateRequestVerify["Minimum"] = "minimum";
    BillingRequestMandateRequestVerify["Recommended"] = "recommended";
    BillingRequestMandateRequestVerify["WhenAvailable"] = "when_available";
    BillingRequestMandateRequestVerify["Always"] = "always";
})(BillingRequestMandateRequestVerify = exports.BillingRequestMandateRequestVerify || (exports.BillingRequestMandateRequestVerify = {}));
var BillingRequestPaymentRequestFundsSettlement;
(function (BillingRequestPaymentRequestFundsSettlement) {
    BillingRequestPaymentRequestFundsSettlement["Managed"] = "managed";
    BillingRequestPaymentRequestFundsSettlement["Direct"] = "direct";
})(BillingRequestPaymentRequestFundsSettlement = exports.BillingRequestPaymentRequestFundsSettlement || (exports.BillingRequestPaymentRequestFundsSettlement = {}));
var BillingRequestPurposeCode;
(function (BillingRequestPurposeCode) {
    BillingRequestPurposeCode["Mortgage"] = "mortgage";
    BillingRequestPurposeCode["Utility"] = "utility";
    BillingRequestPurposeCode["Loan"] = "loan";
    BillingRequestPurposeCode["DependantSupport"] = "dependant_support";
    BillingRequestPurposeCode["Gambling"] = "gambling";
    BillingRequestPurposeCode["Retail"] = "retail";
    BillingRequestPurposeCode["Salary"] = "salary";
    BillingRequestPurposeCode["Personal"] = "personal";
    BillingRequestPurposeCode["Government"] = "government";
    BillingRequestPurposeCode["Pension"] = "pension";
    BillingRequestPurposeCode["Tax"] = "tax";
    BillingRequestPurposeCode["Other"] = "other";
})(BillingRequestPurposeCode = exports.BillingRequestPurposeCode || (exports.BillingRequestPurposeCode = {}));
var BillingRequestResourcesCustomerBankAccountAccountType;
(function (BillingRequestResourcesCustomerBankAccountAccountType) {
    BillingRequestResourcesCustomerBankAccountAccountType["Savings"] = "savings";
    BillingRequestResourcesCustomerBankAccountAccountType["Checking"] = "checking";
})(BillingRequestResourcesCustomerBankAccountAccountType = exports.BillingRequestResourcesCustomerBankAccountAccountType || (exports.BillingRequestResourcesCustomerBankAccountAccountType = {}));
var BillingRequestStatus;
(function (BillingRequestStatus) {
    BillingRequestStatus["Pending"] = "pending";
    BillingRequestStatus["ReadyToFulfil"] = "ready_to_fulfil";
    BillingRequestStatus["Fulfilling"] = "fulfilling";
    BillingRequestStatus["Fulfilled"] = "fulfilled";
    BillingRequestStatus["Cancelled"] = "cancelled";
})(BillingRequestStatus = exports.BillingRequestStatus || (exports.BillingRequestStatus = {}));
var BillingRequestFlowPrefilledBankAccountAccountType;
(function (BillingRequestFlowPrefilledBankAccountAccountType) {
    BillingRequestFlowPrefilledBankAccountAccountType["Savings"] = "savings";
    BillingRequestFlowPrefilledBankAccountAccountType["Checking"] = "checking";
})(BillingRequestFlowPrefilledBankAccountAccountType = exports.BillingRequestFlowPrefilledBankAccountAccountType || (exports.BillingRequestFlowPrefilledBankAccountAccountType = {}));
var BillingRequestTemplateMandateRequestVerify;
(function (BillingRequestTemplateMandateRequestVerify) {
    BillingRequestTemplateMandateRequestVerify["Minimum"] = "minimum";
    BillingRequestTemplateMandateRequestVerify["Recommended"] = "recommended";
    BillingRequestTemplateMandateRequestVerify["WhenAvailable"] = "when_available";
    BillingRequestTemplateMandateRequestVerify["Always"] = "always";
})(BillingRequestTemplateMandateRequestVerify = exports.BillingRequestTemplateMandateRequestVerify || (exports.BillingRequestTemplateMandateRequestVerify = {}));
var BlockReferenceType;
(function (BlockReferenceType) {
    BlockReferenceType["Customer"] = "customer";
    BlockReferenceType["Mandate"] = "mandate";
})(BlockReferenceType = exports.BlockReferenceType || (exports.BlockReferenceType = {}));
var BlockBlockType;
(function (BlockBlockType) {
    BlockBlockType["Email"] = "email";
    BlockBlockType["EmailDomain"] = "email_domain";
    BlockBlockType["BankAccount"] = "bank_account";
    BlockBlockType["BankName"] = "bank_name";
})(BlockBlockType = exports.BlockBlockType || (exports.BlockBlockType = {}));
var BlockReasonType;
(function (BlockReasonType) {
    BlockReasonType["IdentityFraud"] = "identity_fraud";
    BlockReasonType["NoIntentToPay"] = "no_intent_to_pay";
    BlockReasonType["UnfairChargeback"] = "unfair_chargeback";
    BlockReasonType["Other"] = "other";
})(BlockReasonType = exports.BlockReasonType || (exports.BlockReasonType = {}));
var CreditorCreditorType;
(function (CreditorCreditorType) {
    CreditorCreditorType["Company"] = "company";
    CreditorCreditorType["Individual"] = "individual";
    CreditorCreditorType["Charity"] = "charity";
    CreditorCreditorType["Partnership"] = "partnership";
    CreditorCreditorType["Trust"] = "trust";
})(CreditorCreditorType = exports.CreditorCreditorType || (exports.CreditorCreditorType = {}));
var CreditorFxPayoutCurrency;
(function (CreditorFxPayoutCurrency) {
    CreditorFxPayoutCurrency["AUD"] = "AUD";
    CreditorFxPayoutCurrency["CAD"] = "CAD";
    CreditorFxPayoutCurrency["DKK"] = "DKK";
    CreditorFxPayoutCurrency["EUR"] = "EUR";
    CreditorFxPayoutCurrency["GBP"] = "GBP";
    CreditorFxPayoutCurrency["NZD"] = "NZD";
    CreditorFxPayoutCurrency["SEK"] = "SEK";
    CreditorFxPayoutCurrency["USD"] = "USD";
})(CreditorFxPayoutCurrency = exports.CreditorFxPayoutCurrency || (exports.CreditorFxPayoutCurrency = {}));
var CreditorSchemeIdentifierCurrency;
(function (CreditorSchemeIdentifierCurrency) {
    CreditorSchemeIdentifierCurrency["AUD"] = "AUD";
    CreditorSchemeIdentifierCurrency["CAD"] = "CAD";
    CreditorSchemeIdentifierCurrency["DKK"] = "DKK";
    CreditorSchemeIdentifierCurrency["EUR"] = "EUR";
    CreditorSchemeIdentifierCurrency["GBP"] = "GBP";
    CreditorSchemeIdentifierCurrency["NZD"] = "NZD";
    CreditorSchemeIdentifierCurrency["SEK"] = "SEK";
    CreditorSchemeIdentifierCurrency["USD"] = "USD";
})(CreditorSchemeIdentifierCurrency = exports.CreditorSchemeIdentifierCurrency || (exports.CreditorSchemeIdentifierCurrency = {}));
var CreditorSchemeIdentifierScheme;
(function (CreditorSchemeIdentifierScheme) {
    CreditorSchemeIdentifierScheme["Ach"] = "ach";
    CreditorSchemeIdentifierScheme["Autogiro"] = "autogiro";
    CreditorSchemeIdentifierScheme["Bacs"] = "bacs";
    CreditorSchemeIdentifierScheme["Becs"] = "becs";
    CreditorSchemeIdentifierScheme["BecsNz"] = "becs_nz";
    CreditorSchemeIdentifierScheme["Betalingsservice"] = "betalingsservice";
    CreditorSchemeIdentifierScheme["FasterPayments"] = "faster_payments";
    CreditorSchemeIdentifierScheme["Pad"] = "pad";
    CreditorSchemeIdentifierScheme["PayTo"] = "pay_to";
    CreditorSchemeIdentifierScheme["Sepa"] = "sepa";
    CreditorSchemeIdentifierScheme["SepaCreditTransfer"] = "sepa_credit_transfer";
    CreditorSchemeIdentifierScheme["SepaInstantCreditTransfer"] = "sepa_instant_credit_transfer";
})(CreditorSchemeIdentifierScheme = exports.CreditorSchemeIdentifierScheme || (exports.CreditorSchemeIdentifierScheme = {}));
var CreditorSchemeIdentifierStatus;
(function (CreditorSchemeIdentifierStatus) {
    CreditorSchemeIdentifierStatus["Pending"] = "pending";
    CreditorSchemeIdentifierStatus["Active"] = "active";
})(CreditorSchemeIdentifierStatus = exports.CreditorSchemeIdentifierStatus || (exports.CreditorSchemeIdentifierStatus = {}));
var CreditorVerificationStatus;
(function (CreditorVerificationStatus) {
    CreditorVerificationStatus["Successful"] = "successful";
    CreditorVerificationStatus["InReview"] = "in_review";
    CreditorVerificationStatus["ActionRequired"] = "action_required";
})(CreditorVerificationStatus = exports.CreditorVerificationStatus || (exports.CreditorVerificationStatus = {}));
var CreditorBankAccountAccountType;
(function (CreditorBankAccountAccountType) {
    CreditorBankAccountAccountType["Savings"] = "savings";
    CreditorBankAccountAccountType["Checking"] = "checking";
})(CreditorBankAccountAccountType = exports.CreditorBankAccountAccountType || (exports.CreditorBankAccountAccountType = {}));
var CreditorBankAccountVerificationStatus;
(function (CreditorBankAccountVerificationStatus) {
    CreditorBankAccountVerificationStatus["Pending"] = "pending";
    CreditorBankAccountVerificationStatus["InReview"] = "in_review";
    CreditorBankAccountVerificationStatus["Successful"] = "successful";
    CreditorBankAccountVerificationStatus["CouldNotVerify"] = "could_not_verify";
})(CreditorBankAccountVerificationStatus = exports.CreditorBankAccountVerificationStatus || (exports.CreditorBankAccountVerificationStatus = {}));
var CustomerCurrency;
(function (CustomerCurrency) {
    CustomerCurrency["AUD"] = "AUD";
    CustomerCurrency["CAD"] = "CAD";
    CustomerCurrency["DKK"] = "DKK";
    CustomerCurrency["EUR"] = "EUR";
    CustomerCurrency["GBP"] = "GBP";
    CustomerCurrency["NZD"] = "NZD";
    CustomerCurrency["SEK"] = "SEK";
    CustomerCurrency["USD"] = "USD";
})(CustomerCurrency = exports.CustomerCurrency || (exports.CustomerCurrency = {}));
var CustomerSortDirection;
(function (CustomerSortDirection) {
    CustomerSortDirection["Asc"] = "asc";
    CustomerSortDirection["Desc"] = "desc";
})(CustomerSortDirection = exports.CustomerSortDirection || (exports.CustomerSortDirection = {}));
var CustomerSortField;
(function (CustomerSortField) {
    CustomerSortField["Name"] = "name";
    CustomerSortField["CompanyName"] = "company_name";
    CustomerSortField["CreatedAt"] = "created_at";
})(CustomerSortField = exports.CustomerSortField || (exports.CustomerSortField = {}));
var CustomerBankAccountAccountType;
(function (CustomerBankAccountAccountType) {
    CustomerBankAccountAccountType["Savings"] = "savings";
    CustomerBankAccountAccountType["Checking"] = "checking";
})(CustomerBankAccountAccountType = exports.CustomerBankAccountAccountType || (exports.CustomerBankAccountAccountType = {}));
var CustomerNotificationActionTaken;
(function (CustomerNotificationActionTaken) {
    CustomerNotificationActionTaken["Handled"] = "handled";
})(CustomerNotificationActionTaken = exports.CustomerNotificationActionTaken || (exports.CustomerNotificationActionTaken = {}));
var CustomerNotificationType;
(function (CustomerNotificationType) {
    CustomerNotificationType["PaymentCreated"] = "payment_created";
    CustomerNotificationType["PaymentCancelled"] = "payment_cancelled";
    CustomerNotificationType["MandateCreated"] = "mandate_created";
    CustomerNotificationType["MandateBlocked"] = "mandate_blocked";
    CustomerNotificationType["SubscriptionCreated"] = "subscription_created";
    CustomerNotificationType["SubscriptionCancelled"] = "subscription_cancelled";
    CustomerNotificationType["InstalmentScheduleCreated"] = "instalment_schedule_created";
    CustomerNotificationType["InstalmentScheduleCancelled"] = "instalment_schedule_cancelled";
})(CustomerNotificationType = exports.CustomerNotificationType || (exports.CustomerNotificationType = {}));
var EventInclude;
(function (EventInclude) {
    EventInclude["BillingRequest"] = "billing_request";
    EventInclude["Creditor"] = "creditor";
    EventInclude["InstalmentSchedule"] = "instalment_schedule";
    EventInclude["Mandate"] = "mandate";
    EventInclude["PayerAuthorisation"] = "payer_authorisation";
    EventInclude["Payment"] = "payment";
    EventInclude["Payout"] = "payout";
    EventInclude["Refund"] = "refund";
    EventInclude["SchemeIdentifier"] = "scheme_identifier";
    EventInclude["Subscription"] = "subscription";
})(EventInclude = exports.EventInclude || (exports.EventInclude = {}));
var EventDetailsOrigin;
(function (EventDetailsOrigin) {
    EventDetailsOrigin["Bank"] = "bank";
    EventDetailsOrigin["Api"] = "api";
    EventDetailsOrigin["Gocardless"] = "gocardless";
    EventDetailsOrigin["Customer"] = "customer";
    EventDetailsOrigin["Payer"] = "payer";
})(EventDetailsOrigin = exports.EventDetailsOrigin || (exports.EventDetailsOrigin = {}));
var EventDetailsScheme;
(function (EventDetailsScheme) {
    EventDetailsScheme["Ach"] = "ach";
    EventDetailsScheme["Autogiro"] = "autogiro";
    EventDetailsScheme["Bacs"] = "bacs";
    EventDetailsScheme["Becs"] = "becs";
    EventDetailsScheme["BecsNz"] = "becs_nz";
    EventDetailsScheme["Betalingsservice"] = "betalingsservice";
    EventDetailsScheme["FasterPayments"] = "faster_payments";
    EventDetailsScheme["Pad"] = "pad";
    EventDetailsScheme["PayTo"] = "pay_to";
    EventDetailsScheme["SepaCore"] = "sepa_core";
    EventDetailsScheme["SepaCor1"] = "sepa_cor1";
})(EventDetailsScheme = exports.EventDetailsScheme || (exports.EventDetailsScheme = {}));
var EventResourceType;
(function (EventResourceType) {
    EventResourceType["BillingRequests"] = "billing_requests";
    EventResourceType["Creditors"] = "creditors";
    EventResourceType["InstalmentSchedules"] = "instalment_schedules";
    EventResourceType["Mandates"] = "mandates";
    EventResourceType["Organisations"] = "organisations";
    EventResourceType["PayerAuthorisations"] = "payer_authorisations";
    EventResourceType["Payments"] = "payments";
    EventResourceType["Payouts"] = "payouts";
    EventResourceType["Refunds"] = "refunds";
    EventResourceType["SchemeIdentifiers"] = "scheme_identifiers";
    EventResourceType["Subscriptions"] = "subscriptions";
})(EventResourceType = exports.EventResourceType || (exports.EventResourceType = {}));
var InstalmentScheduleInstalmentsIntervalUnit;
(function (InstalmentScheduleInstalmentsIntervalUnit) {
    InstalmentScheduleInstalmentsIntervalUnit["Weekly"] = "weekly";
    InstalmentScheduleInstalmentsIntervalUnit["Monthly"] = "monthly";
    InstalmentScheduleInstalmentsIntervalUnit["Yearly"] = "yearly";
})(InstalmentScheduleInstalmentsIntervalUnit = exports.InstalmentScheduleInstalmentsIntervalUnit || (exports.InstalmentScheduleInstalmentsIntervalUnit = {}));
var InstalmentScheduleCurrency;
(function (InstalmentScheduleCurrency) {
    InstalmentScheduleCurrency["AUD"] = "AUD";
    InstalmentScheduleCurrency["CAD"] = "CAD";
    InstalmentScheduleCurrency["DKK"] = "DKK";
    InstalmentScheduleCurrency["EUR"] = "EUR";
    InstalmentScheduleCurrency["GBP"] = "GBP";
    InstalmentScheduleCurrency["NZD"] = "NZD";
    InstalmentScheduleCurrency["SEK"] = "SEK";
    InstalmentScheduleCurrency["USD"] = "USD";
})(InstalmentScheduleCurrency = exports.InstalmentScheduleCurrency || (exports.InstalmentScheduleCurrency = {}));
var InstalmentScheduleStatus;
(function (InstalmentScheduleStatus) {
    InstalmentScheduleStatus["Pending"] = "pending";
    InstalmentScheduleStatus["Active"] = "active";
    InstalmentScheduleStatus["CreationFailed"] = "creation_failed";
    InstalmentScheduleStatus["Completed"] = "completed";
    InstalmentScheduleStatus["Cancelled"] = "cancelled";
    InstalmentScheduleStatus["Errored"] = "errored";
})(InstalmentScheduleStatus = exports.InstalmentScheduleStatus || (exports.InstalmentScheduleStatus = {}));
var MandateAuthorisationSource;
(function (MandateAuthorisationSource) {
    MandateAuthorisationSource["Web"] = "web";
    MandateAuthorisationSource["Telephone"] = "telephone";
    MandateAuthorisationSource["Paper"] = "paper";
})(MandateAuthorisationSource = exports.MandateAuthorisationSource || (exports.MandateAuthorisationSource = {}));
var MandateConsentParametersPeriodPeriod;
(function (MandateConsentParametersPeriodPeriod) {
    MandateConsentParametersPeriodPeriod["Day"] = "day";
    MandateConsentParametersPeriodPeriod["Week"] = "week";
    MandateConsentParametersPeriodPeriod["Month"] = "month";
    MandateConsentParametersPeriodPeriod["Year"] = "year";
    MandateConsentParametersPeriodPeriod["Flexible"] = "flexible";
})(MandateConsentParametersPeriodPeriod = exports.MandateConsentParametersPeriodPeriod || (exports.MandateConsentParametersPeriodPeriod = {}));
var MandateFundsSettlement;
(function (MandateFundsSettlement) {
    MandateFundsSettlement["Managed"] = "managed";
    MandateFundsSettlement["Direct"] = "direct";
})(MandateFundsSettlement = exports.MandateFundsSettlement || (exports.MandateFundsSettlement = {}));
var MandateStatus;
(function (MandateStatus) {
    MandateStatus["PendingCustomerApproval"] = "pending_customer_approval";
    MandateStatus["PendingSubmission"] = "pending_submission";
    MandateStatus["Submitted"] = "submitted";
    MandateStatus["Active"] = "active";
    MandateStatus["Failed"] = "failed";
    MandateStatus["Cancelled"] = "cancelled";
    MandateStatus["Expired"] = "expired";
    MandateStatus["Consumed"] = "consumed";
    MandateStatus["Blocked"] = "blocked";
    MandateStatus["SuspendedByPayer"] = "suspended_by_payer";
})(MandateStatus = exports.MandateStatus || (exports.MandateStatus = {}));
var MandateImportScheme;
(function (MandateImportScheme) {
    MandateImportScheme["Ach"] = "ach";
    MandateImportScheme["Autogiro"] = "autogiro";
    MandateImportScheme["Bacs"] = "bacs";
    MandateImportScheme["Becs"] = "becs";
    MandateImportScheme["BecsNz"] = "becs_nz";
    MandateImportScheme["Betalingsservice"] = "betalingsservice";
    MandateImportScheme["FasterPayments"] = "faster_payments";
    MandateImportScheme["Pad"] = "pad";
    MandateImportScheme["PayTo"] = "pay_to";
    MandateImportScheme["SepaCore"] = "sepa_core";
})(MandateImportScheme = exports.MandateImportScheme || (exports.MandateImportScheme = {}));
var MandateImportStatus;
(function (MandateImportStatus) {
    MandateImportStatus["Created"] = "created";
    MandateImportStatus["Submitted"] = "submitted";
    MandateImportStatus["Cancelled"] = "cancelled";
    MandateImportStatus["Processing"] = "processing";
    MandateImportStatus["Processed"] = "processed";
})(MandateImportStatus = exports.MandateImportStatus || (exports.MandateImportStatus = {}));
var MandatePdfAccountType;
(function (MandatePdfAccountType) {
    MandatePdfAccountType["Savings"] = "savings";
    MandatePdfAccountType["Checking"] = "checking";
})(MandatePdfAccountType = exports.MandatePdfAccountType || (exports.MandatePdfAccountType = {}));
var MandatePdfSubscriptionFrequency;
(function (MandatePdfSubscriptionFrequency) {
    MandatePdfSubscriptionFrequency["Weekly"] = "weekly";
    MandatePdfSubscriptionFrequency["Monthly"] = "monthly";
    MandatePdfSubscriptionFrequency["Yearly"] = "yearly";
})(MandatePdfSubscriptionFrequency = exports.MandatePdfSubscriptionFrequency || (exports.MandatePdfSubscriptionFrequency = {}));
var NegativeBalanceLimitCurrency;
(function (NegativeBalanceLimitCurrency) {
    NegativeBalanceLimitCurrency["AUD"] = "AUD";
    NegativeBalanceLimitCurrency["CAD"] = "CAD";
    NegativeBalanceLimitCurrency["DKK"] = "DKK";
    NegativeBalanceLimitCurrency["EUR"] = "EUR";
    NegativeBalanceLimitCurrency["GBP"] = "GBP";
    NegativeBalanceLimitCurrency["NZD"] = "NZD";
    NegativeBalanceLimitCurrency["SEK"] = "SEK";
    NegativeBalanceLimitCurrency["USD"] = "USD";
})(NegativeBalanceLimitCurrency = exports.NegativeBalanceLimitCurrency || (exports.NegativeBalanceLimitCurrency = {}));
var PayerAuthorisationBankAccountAccountType;
(function (PayerAuthorisationBankAccountAccountType) {
    PayerAuthorisationBankAccountAccountType["Savings"] = "savings";
    PayerAuthorisationBankAccountAccountType["Checking"] = "checking";
})(PayerAuthorisationBankAccountAccountType = exports.PayerAuthorisationBankAccountAccountType || (exports.PayerAuthorisationBankAccountAccountType = {}));
var PayerAuthorisationMandateScheme;
(function (PayerAuthorisationMandateScheme) {
    PayerAuthorisationMandateScheme["Ach"] = "ach";
    PayerAuthorisationMandateScheme["Autogiro"] = "autogiro";
    PayerAuthorisationMandateScheme["Bacs"] = "bacs";
    PayerAuthorisationMandateScheme["Becs"] = "becs";
    PayerAuthorisationMandateScheme["BecsNz"] = "becs_nz";
    PayerAuthorisationMandateScheme["Betalingsservice"] = "betalingsservice";
    PayerAuthorisationMandateScheme["FasterPayments"] = "faster_payments";
    PayerAuthorisationMandateScheme["Pad"] = "pad";
    PayerAuthorisationMandateScheme["PayTo"] = "pay_to";
    PayerAuthorisationMandateScheme["SepaCore"] = "sepa_core";
})(PayerAuthorisationMandateScheme = exports.PayerAuthorisationMandateScheme || (exports.PayerAuthorisationMandateScheme = {}));
var PayerAuthorisationStatus;
(function (PayerAuthorisationStatus) {
    PayerAuthorisationStatus["Created"] = "created";
    PayerAuthorisationStatus["Submitted"] = "submitted";
    PayerAuthorisationStatus["Confirmed"] = "confirmed";
    PayerAuthorisationStatus["Completed"] = "completed";
    PayerAuthorisationStatus["Failed"] = "failed";
})(PayerAuthorisationStatus = exports.PayerAuthorisationStatus || (exports.PayerAuthorisationStatus = {}));
var PaymentSortDirection;
(function (PaymentSortDirection) {
    PaymentSortDirection["Asc"] = "asc";
    PaymentSortDirection["Desc"] = "desc";
})(PaymentSortDirection = exports.PaymentSortDirection || (exports.PaymentSortDirection = {}));
var PaymentSortField;
(function (PaymentSortField) {
    PaymentSortField["ChargeDate"] = "charge_date";
    PaymentSortField["Amount"] = "amount";
})(PaymentSortField = exports.PaymentSortField || (exports.PaymentSortField = {}));
var PaymentCurrency;
(function (PaymentCurrency) {
    PaymentCurrency["AUD"] = "AUD";
    PaymentCurrency["CAD"] = "CAD";
    PaymentCurrency["DKK"] = "DKK";
    PaymentCurrency["EUR"] = "EUR";
    PaymentCurrency["GBP"] = "GBP";
    PaymentCurrency["NZD"] = "NZD";
    PaymentCurrency["SEK"] = "SEK";
    PaymentCurrency["USD"] = "USD";
})(PaymentCurrency = exports.PaymentCurrency || (exports.PaymentCurrency = {}));
var PaymentFxFxCurrency;
(function (PaymentFxFxCurrency) {
    PaymentFxFxCurrency["AUD"] = "AUD";
    PaymentFxFxCurrency["CAD"] = "CAD";
    PaymentFxFxCurrency["DKK"] = "DKK";
    PaymentFxFxCurrency["EUR"] = "EUR";
    PaymentFxFxCurrency["GBP"] = "GBP";
    PaymentFxFxCurrency["NZD"] = "NZD";
    PaymentFxFxCurrency["SEK"] = "SEK";
    PaymentFxFxCurrency["USD"] = "USD";
})(PaymentFxFxCurrency = exports.PaymentFxFxCurrency || (exports.PaymentFxFxCurrency = {}));
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["PendingCustomerApproval"] = "pending_customer_approval";
    PaymentStatus["PendingSubmission"] = "pending_submission";
    PaymentStatus["Submitted"] = "submitted";
    PaymentStatus["Confirmed"] = "confirmed";
    PaymentStatus["PaidOut"] = "paid_out";
    PaymentStatus["Cancelled"] = "cancelled";
    PaymentStatus["CustomerApprovalDenied"] = "customer_approval_denied";
    PaymentStatus["Failed"] = "failed";
    PaymentStatus["ChargedBack"] = "charged_back";
})(PaymentStatus = exports.PaymentStatus || (exports.PaymentStatus = {}));
var PayoutCurrency;
(function (PayoutCurrency) {
    PayoutCurrency["AUD"] = "AUD";
    PayoutCurrency["CAD"] = "CAD";
    PayoutCurrency["DKK"] = "DKK";
    PayoutCurrency["EUR"] = "EUR";
    PayoutCurrency["GBP"] = "GBP";
    PayoutCurrency["NZD"] = "NZD";
    PayoutCurrency["SEK"] = "SEK";
    PayoutCurrency["USD"] = "USD";
})(PayoutCurrency = exports.PayoutCurrency || (exports.PayoutCurrency = {}));
var PayoutFxFxCurrency;
(function (PayoutFxFxCurrency) {
    PayoutFxFxCurrency["AUD"] = "AUD";
    PayoutFxFxCurrency["CAD"] = "CAD";
    PayoutFxFxCurrency["DKK"] = "DKK";
    PayoutFxFxCurrency["EUR"] = "EUR";
    PayoutFxFxCurrency["GBP"] = "GBP";
    PayoutFxFxCurrency["NZD"] = "NZD";
    PayoutFxFxCurrency["SEK"] = "SEK";
    PayoutFxFxCurrency["USD"] = "USD";
})(PayoutFxFxCurrency = exports.PayoutFxFxCurrency || (exports.PayoutFxFxCurrency = {}));
var PayoutPayoutType;
(function (PayoutPayoutType) {
    PayoutPayoutType["Merchant"] = "merchant";
    PayoutPayoutType["Partner"] = "partner";
})(PayoutPayoutType = exports.PayoutPayoutType || (exports.PayoutPayoutType = {}));
var PayoutStatus;
(function (PayoutStatus) {
    PayoutStatus["Pending"] = "pending";
    PayoutStatus["Paid"] = "paid";
    PayoutStatus["Bounced"] = "bounced";
})(PayoutStatus = exports.PayoutStatus || (exports.PayoutStatus = {}));
var PayoutItemInclude2020TaxCutover;
(function (PayoutItemInclude2020TaxCutover) {
    PayoutItemInclude2020TaxCutover["True"] = "true";
    PayoutItemInclude2020TaxCutover["False"] = "false";
})(PayoutItemInclude2020TaxCutover = exports.PayoutItemInclude2020TaxCutover || (exports.PayoutItemInclude2020TaxCutover = {}));
var PayoutItemTaxisCurrency;
(function (PayoutItemTaxisCurrency) {
    PayoutItemTaxisCurrency["AUD"] = "AUD";
    PayoutItemTaxisCurrency["CAD"] = "CAD";
    PayoutItemTaxisCurrency["DKK"] = "DKK";
    PayoutItemTaxisCurrency["EUR"] = "EUR";
    PayoutItemTaxisCurrency["GBP"] = "GBP";
    PayoutItemTaxisCurrency["NZD"] = "NZD";
    PayoutItemTaxisCurrency["SEK"] = "SEK";
    PayoutItemTaxisCurrency["USD"] = "USD";
})(PayoutItemTaxisCurrency = exports.PayoutItemTaxisCurrency || (exports.PayoutItemTaxisCurrency = {}));
var PayoutItemType;
(function (PayoutItemType) {
    PayoutItemType["PaymentPaidOut"] = "payment_paid_out";
    PayoutItemType["PaymentFailed"] = "payment_failed";
    PayoutItemType["PaymentChargedBack"] = "payment_charged_back";
    PayoutItemType["PaymentRefunded"] = "payment_refunded";
    PayoutItemType["Refund"] = "refund";
    PayoutItemType["GocardlessFee"] = "gocardless_fee";
    PayoutItemType["AppFee"] = "app_fee";
    PayoutItemType["RevenueShare"] = "revenue_share";
    PayoutItemType["SurchargeFee"] = "surcharge_fee";
    PayoutItemType["RefundFundsReturned"] = "refund_funds_returned";
})(PayoutItemType = exports.PayoutItemType || (exports.PayoutItemType = {}));
var RedirectFlowPrefilledBankAccountAccountType;
(function (RedirectFlowPrefilledBankAccountAccountType) {
    RedirectFlowPrefilledBankAccountAccountType["Savings"] = "savings";
    RedirectFlowPrefilledBankAccountAccountType["Checking"] = "checking";
})(RedirectFlowPrefilledBankAccountAccountType = exports.RedirectFlowPrefilledBankAccountAccountType || (exports.RedirectFlowPrefilledBankAccountAccountType = {}));
var RedirectFlowScheme;
(function (RedirectFlowScheme) {
    RedirectFlowScheme["Ach"] = "ach";
    RedirectFlowScheme["Autogiro"] = "autogiro";
    RedirectFlowScheme["Bacs"] = "bacs";
    RedirectFlowScheme["Becs"] = "becs";
    RedirectFlowScheme["BecsNz"] = "becs_nz";
    RedirectFlowScheme["Betalingsservice"] = "betalingsservice";
    RedirectFlowScheme["Pad"] = "pad";
    RedirectFlowScheme["SepaCore"] = "sepa_core";
})(RedirectFlowScheme = exports.RedirectFlowScheme || (exports.RedirectFlowScheme = {}));
var RefundRefundType;
(function (RefundRefundType) {
    RefundRefundType["Mandate"] = "mandate";
    RefundRefundType["Payment"] = "payment";
})(RefundRefundType = exports.RefundRefundType || (exports.RefundRefundType = {}));
var RefundFxFxCurrency;
(function (RefundFxFxCurrency) {
    RefundFxFxCurrency["AUD"] = "AUD";
    RefundFxFxCurrency["CAD"] = "CAD";
    RefundFxFxCurrency["DKK"] = "DKK";
    RefundFxFxCurrency["EUR"] = "EUR";
    RefundFxFxCurrency["GBP"] = "GBP";
    RefundFxFxCurrency["NZD"] = "NZD";
    RefundFxFxCurrency["SEK"] = "SEK";
    RefundFxFxCurrency["USD"] = "USD";
})(RefundFxFxCurrency = exports.RefundFxFxCurrency || (exports.RefundFxFxCurrency = {}));
var RefundStatus;
(function (RefundStatus) {
    RefundStatus["Created"] = "created";
    RefundStatus["PendingSubmission"] = "pending_submission";
    RefundStatus["Submitted"] = "submitted";
    RefundStatus["Paid"] = "paid";
    RefundStatus["Cancelled"] = "cancelled";
    RefundStatus["Bounced"] = "bounced";
    RefundStatus["FundsReturned"] = "funds_returned";
})(RefundStatus = exports.RefundStatus || (exports.RefundStatus = {}));
var SchemeIdentifierCurrency;
(function (SchemeIdentifierCurrency) {
    SchemeIdentifierCurrency["AUD"] = "AUD";
    SchemeIdentifierCurrency["CAD"] = "CAD";
    SchemeIdentifierCurrency["DKK"] = "DKK";
    SchemeIdentifierCurrency["EUR"] = "EUR";
    SchemeIdentifierCurrency["GBP"] = "GBP";
    SchemeIdentifierCurrency["NZD"] = "NZD";
    SchemeIdentifierCurrency["SEK"] = "SEK";
    SchemeIdentifierCurrency["USD"] = "USD";
})(SchemeIdentifierCurrency = exports.SchemeIdentifierCurrency || (exports.SchemeIdentifierCurrency = {}));
var SchemeIdentifierScheme;
(function (SchemeIdentifierScheme) {
    SchemeIdentifierScheme["Ach"] = "ach";
    SchemeIdentifierScheme["Autogiro"] = "autogiro";
    SchemeIdentifierScheme["Bacs"] = "bacs";
    SchemeIdentifierScheme["Becs"] = "becs";
    SchemeIdentifierScheme["BecsNz"] = "becs_nz";
    SchemeIdentifierScheme["Betalingsservice"] = "betalingsservice";
    SchemeIdentifierScheme["FasterPayments"] = "faster_payments";
    SchemeIdentifierScheme["Pad"] = "pad";
    SchemeIdentifierScheme["PayTo"] = "pay_to";
    SchemeIdentifierScheme["Sepa"] = "sepa";
    SchemeIdentifierScheme["SepaCreditTransfer"] = "sepa_credit_transfer";
    SchemeIdentifierScheme["SepaInstantCreditTransfer"] = "sepa_instant_credit_transfer";
})(SchemeIdentifierScheme = exports.SchemeIdentifierScheme || (exports.SchemeIdentifierScheme = {}));
var SchemeIdentifierStatus;
(function (SchemeIdentifierStatus) {
    SchemeIdentifierStatus["Pending"] = "pending";
    SchemeIdentifierStatus["Active"] = "active";
})(SchemeIdentifierStatus = exports.SchemeIdentifierStatus || (exports.SchemeIdentifierStatus = {}));
// [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217#Active_codes) code for the currency in
// which amounts will be paid out (after foreign exchange). Currently "AUD", "CAD", "DKK",
// "EUR", "GBP", "NZD", "SEK" and "USD" are supported. Present only if payouts will be (or
// were) made via foreign exchange.
var FxCurrency;
(function (FxCurrency) {
    FxCurrency["AUD"] = "AUD";
    FxCurrency["CAD"] = "CAD";
    FxCurrency["DKK"] = "DKK";
    FxCurrency["EUR"] = "EUR";
    FxCurrency["GBP"] = "GBP";
    FxCurrency["NZD"] = "NZD";
    FxCurrency["SEK"] = "SEK";
    FxCurrency["USD"] = "USD";
})(FxCurrency = exports.FxCurrency || (exports.FxCurrency = {}));
var SubscriptionIntervalUnit;
(function (SubscriptionIntervalUnit) {
    SubscriptionIntervalUnit["Weekly"] = "weekly";
    SubscriptionIntervalUnit["Monthly"] = "monthly";
    SubscriptionIntervalUnit["Yearly"] = "yearly";
})(SubscriptionIntervalUnit = exports.SubscriptionIntervalUnit || (exports.SubscriptionIntervalUnit = {}));
var SubscriptionMonth;
(function (SubscriptionMonth) {
    SubscriptionMonth["January"] = "january";
    SubscriptionMonth["February"] = "february";
    SubscriptionMonth["March"] = "march";
    SubscriptionMonth["April"] = "april";
    SubscriptionMonth["May"] = "may";
    SubscriptionMonth["June"] = "june";
    SubscriptionMonth["July"] = "july";
    SubscriptionMonth["August"] = "august";
    SubscriptionMonth["September"] = "september";
    SubscriptionMonth["October"] = "october";
    SubscriptionMonth["November"] = "november";
    SubscriptionMonth["December"] = "december";
})(SubscriptionMonth = exports.SubscriptionMonth || (exports.SubscriptionMonth = {}));
var SubscriptionStatus;
(function (SubscriptionStatus) {
    SubscriptionStatus["PendingCustomerApproval"] = "pending_customer_approval";
    SubscriptionStatus["CustomerApprovalDenied"] = "customer_approval_denied";
    SubscriptionStatus["Active"] = "active";
    SubscriptionStatus["Finished"] = "finished";
    SubscriptionStatus["Cancelled"] = "cancelled";
    SubscriptionStatus["Paused"] = "paused";
})(SubscriptionStatus = exports.SubscriptionStatus || (exports.SubscriptionStatus = {}));
//# sourceMappingURL=Types.js.map