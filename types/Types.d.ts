/** Type for a bankauthorisation resource. */
export interface BankAuthorisation {
    authorisation_type?: BankAuthorisationAuthorisationType;
    authorised_at?: string | null;
    created_at?: string;
    expires_at?: string;
    id?: string;
    last_visited_at?: string | null;
    links?: BankAuthorisationLinks;
    qr_code_url?: string | null;
    redirect_uri?: string;
    url?: string;
}
/** Type for a bankauthorisationcreaterequestlinks resource. */
export interface BankAuthorisationCreateRequestLinks {
    billing_request?: string;
}
export declare enum BankAuthorisationAuthorisationType {
    Mandate = "mandate",
    Payment = "payment"
}
/** Type for a bankauthorisationlinks resource. */
export interface BankAuthorisationLinks {
    billing_request?: string;
    institution?: string;
}
/** Type for a bankdetailslookup resource. */
export interface BankDetailsLookup {
    available_debit_schemes?: BankDetailsLookupAvailableDebitScheme[];
    bank_name?: string | null;
    bic?: string | null;
}
export declare enum BankDetailsLookupAvailableDebitScheme {
    Ach = "ach",
    Autogiro = "autogiro",
    Bacs = "bacs",
    Becs = "becs",
    BecsNz = "becs_nz",
    Betalingsservice = "betalingsservice",
    FasterPayments = "faster_payments",
    Pad = "pad",
    PayTo = "pay_to",
    SepaCore = "sepa_core"
}
/** Type for a billingrequest resource. */
export interface BillingRequest {
    actions?: BillingRequestAction[];
    created_at?: string;
    fallback_enabled?: boolean;
    id?: string;
    links?: BillingRequestLinks;
    mandate_request?: BillingRequestMandateRequest;
    metadata?: JsonMap;
    payment_request?: BillingRequestPaymentRequest;
    purpose_code?: BillingRequestPurposeCode;
    resources?: BillingRequestResources;
    status?: BillingRequestStatus;
}
/** Type for a billingrequestcreaterequestlinks resource. */
export interface BillingRequestCreateRequestLinks {
    creditor?: string;
    customer?: string;
    customer_bank_account?: string;
}
/** Type for a billingrequestcustomer resource. */
export interface BillingRequestCustomer {
    company_name?: string | null;
    email?: string | null;
    family_name?: string | null;
    given_name?: string | null;
    language?: string | null;
    metadata?: JsonMap;
    phone_number?: string | null;
}
/** Type for a billingrequestcustomerbillingdetail resource. */
export interface BillingRequestCustomerBillingDetail {
    address_line1?: string | null;
    address_line2?: string | null;
    address_line3?: string | null;
    city?: string | null;
    country_code?: string | null;
    danish_identity_number?: string | null;
    ip_address?: string | null;
    postal_code?: string | null;
    region?: string | null;
    swedish_identity_number?: string | null;
}
export declare enum BillingRequestAccountType {
    Savings = "savings",
    Checking = "checking"
}
export declare enum BillingRequestNotificationType {
    Email = "email"
}
/** Type for a billingrequestaction resource. */
export interface BillingRequestAction {
    available_currencies?: string[];
    bank_authorisation?: BillingRequestActionBankAuthorisation;
    collect_customer_details?: BillingRequestActionCollectCustomerDetails;
    completes_actions?: string[];
    institution_guess_status?: BillingRequestActionInstitutionGuessStatus;
    required?: boolean;
    requires_actions?: string[];
    status?: BillingRequestActionStatus;
    type?: BillingRequestActionType;
}
/** Type for a billingrequestactionavailablecurrencies resource. */
export interface BillingRequestActionAvailableCurrencies {
    currency?: string;
}
/** Type for a billingrequestactionbankauthorisation resource. */
export interface BillingRequestActionBankAuthorisation {
    adapter?: BillingRequestActionBankAuthorisationAdapter;
    authorisation_type?: BillingRequestActionBankAuthorisationAuthorisationType;
}
export declare enum BillingRequestActionBankAuthorisationAdapter {
    OpenBankingGatewayPis = "open_banking_gateway_pis",
    PlaidAis = "plaid_ais",
    OpenBankingGatewayAis = "open_banking_gateway_ais",
    BankidAis = "bankid_ais",
    BankPayRecurring = "bank_pay_recurring"
}
export declare enum BillingRequestActionBankAuthorisationAuthorisationType {
    Payment = "payment",
    Mandate = "mandate"
}
/** Type for a billingrequestactioncollectcustomerdetails resource. */
export interface BillingRequestActionCollectCustomerDetails {
    default_country_code?: string;
    incomplete_fields?: BillingRequestActionCollectCustomerDetailsIncompleteFields;
}
/** Type for a billingrequestactioncollectcustomerdetailsincompletefields resource. */
export interface BillingRequestActionCollectCustomerDetailsIncompleteFields {
    customer?: string[];
    customer_billing_detail?: string[];
}
export declare enum BillingRequestActionInstitutionGuessStatus {
    NotNeeded = "not_needed",
    Pending = "pending",
    Failed = "failed",
    Success = "success"
}
export declare enum BillingRequestActionStatus {
    Pending = "pending",
    Completed = "completed"
}
export declare enum BillingRequestActionType {
    ChooseCurrency = "choose_currency",
    CollectAmount = "collect_amount",
    CollectCustomerDetails = "collect_customer_details",
    CollectBankAccount = "collect_bank_account",
    BankAuthorisation = "bank_authorisation",
    ConfirmPayerDetails = "confirm_payer_details",
    SelectInstitution = "select_institution"
}
/** Type for a billingrequestlinks resource. */
export interface BillingRequestLinks {
    bank_authorisation?: string;
    creditor?: string;
    customer?: string;
    customer_bank_account?: string;
    customer_billing_detail?: string;
    mandate_request?: string;
    mandate_request_mandate?: string;
    organisation?: string;
    payment_provider?: string;
    payment_request?: string;
    payment_request_payment?: string;
}
/** Type for a billingrequestmandaterequest resource. */
export interface BillingRequestMandateRequest {
    authorisation_source?: BillingRequestMandateRequestAuthorisationSource;
    constraints?: BillingRequestMandateRequestConstraints | null;
    currency?: string;
    description?: string | null;
    links?: BillingRequestMandateRequestLinks;
    metadata?: JsonMap;
    payer_requested_dual_signature?: boolean;
    scheme?: string | null;
    verify?: BillingRequestMandateRequestVerify;
}
export declare enum BillingRequestMandateRequestAuthorisationSource {
    Web = "web",
    Telephone = "telephone",
    Paper = "paper"
}
/** Type for a billingrequestmandaterequestconstraints resource. */
export interface BillingRequestMandateRequestConstraints {
    end_date?: string;
    max_amount_per_payment?: number;
    periodic_limits?: BillingRequestMandateRequestConstraintsPeriodicLimit[];
    start_date?: string;
}
/** Type for a billingrequestmandaterequestconstraintsperiodiclimit resource. */
export interface BillingRequestMandateRequestConstraintsPeriodicLimit {
    alignment?: BillingRequestMandateRequestConstraintsPeriodicLimitAlignment;
    max_payments?: number;
    max_total_amount?: number;
    period?: BillingRequestMandateRequestConstraintsPeriodicLimitPeriod;
}
export declare enum BillingRequestMandateRequestConstraintsPeriodicLimitAlignment {
    Calendar = "calendar",
    CreationDate = "creation_date"
}
export declare enum BillingRequestMandateRequestConstraintsPeriodicLimitPeriod {
    Day = "day",
    Week = "week",
    Month = "month",
    Year = "year",
    Flexible = "flexible"
}
/** Type for a billingrequestmandaterequestlinks resource. */
export interface BillingRequestMandateRequestLinks {
    mandate?: string;
}
export declare enum BillingRequestMandateRequestVerify {
    Minimum = "minimum",
    Recommended = "recommended",
    WhenAvailable = "when_available",
    Always = "always"
}
/** Type for a billingrequestpaymentrequest resource. */
export interface BillingRequestPaymentRequest {
    amount?: string;
    app_fee?: string | null;
    currency?: string;
    description?: string | null;
    funds_settlement?: BillingRequestPaymentRequestFundsSettlement;
    links?: BillingRequestPaymentRequestLinks;
    metadata?: JsonMap;
    scheme?: string | null;
}
export declare enum BillingRequestPaymentRequestFundsSettlement {
    Managed = "managed",
    Direct = "direct"
}
/** Type for a billingrequestpaymentrequestlinks resource. */
export interface BillingRequestPaymentRequestLinks {
    payment?: string;
}
export declare enum BillingRequestPurposeCode {
    Mortgage = "mortgage",
    Utility = "utility",
    Loan = "loan",
    DependantSupport = "dependant_support",
    Gambling = "gambling",
    Retail = "retail",
    Salary = "salary",
    Personal = "personal",
    Government = "government",
    Pension = "pension",
    Tax = "tax",
    Other = "other"
}
/** Type for a billingrequestresources resource. */
export interface BillingRequestResources {
    customer?: BillingRequestResourcesCustomer;
    customer_bank_account?: BillingRequestResourcesCustomerBankAccount | null;
    customer_billing_detail?: BillingRequestResourcesCustomerBillingDetail;
}
/** Type for a billingrequestresourcescustomer resource. */
export interface BillingRequestResourcesCustomer {
    company_name?: string | null;
    created_at?: string;
    email?: string | null;
    family_name?: string | null;
    given_name?: string | null;
    id?: string;
    language?: string | null;
    metadata?: JsonMap;
    phone_number?: string | null;
}
/** Type for a billingrequestresourcescustomerbankaccount resource. */
export interface BillingRequestResourcesCustomerBankAccount {
    account_holder_name?: string;
    account_number_ending?: string;
    account_type?: BillingRequestResourcesCustomerBankAccountAccountType;
    bank_name?: string;
    country_code?: string | null;
    created_at?: string;
    currency?: string | null;
    enabled?: boolean;
    id?: string;
    links?: BillingRequestResourcesCustomerBankAccountLinks;
    metadata?: JsonMap;
}
export declare enum BillingRequestResourcesCustomerBankAccountAccountType {
    Savings = "savings",
    Checking = "checking"
}
/** Type for a billingrequestresourcescustomerbankaccountlinks resource. */
export interface BillingRequestResourcesCustomerBankAccountLinks {
    customer?: string;
}
/** Type for a billingrequestresourcescustomerbillingdetail resource. */
export interface BillingRequestResourcesCustomerBillingDetail {
    address_line1?: string | null;
    address_line2?: string | null;
    address_line3?: string | null;
    city?: string | null;
    country_code?: string | null;
    created_at?: string;
    danish_identity_number?: string | null;
    id?: string;
    ip_address?: string | null;
    postal_code?: string | null;
    region?: string | null;
    schemes?: string[];
    swedish_identity_number?: string | null;
}
export declare enum BillingRequestStatus {
    Pending = "pending",
    ReadyToFulfil = "ready_to_fulfil",
    Fulfilling = "fulfilling",
    Fulfilled = "fulfilled",
    Cancelled = "cancelled"
}
/** Type for a billingrequestflow resource. */
export interface BillingRequestFlow {
    authorisation_url?: string;
    auto_fulfil?: boolean;
    created_at?: string;
    customer_details_captured?: boolean;
    exit_uri?: string | null;
    expires_at?: string;
    id?: string;
    language?: string | null;
    links?: BillingRequestFlowLinks;
    lock_bank_account?: boolean;
    lock_currency?: boolean;
    lock_customer_details?: boolean;
    prefilled_bank_account?: BillingRequestFlowPrefilledBankAccount | null;
    prefilled_customer?: BillingRequestFlowPrefilledCustomer | null;
    redirect_uri?: string | null;
    session_token?: string | null;
    show_redirect_buttons?: boolean;
    show_success_redirect_button?: boolean;
}
/** Type for a billingrequestflowcreaterequestlinks resource. */
export interface BillingRequestFlowCreateRequestLinks {
    billing_request: string;
}
/** Type for a billingrequestflowlinks resource. */
export interface BillingRequestFlowLinks {
    billing_request: string;
}
/** Type for a billingrequestflowprefilledbankaccount resource. */
export interface BillingRequestFlowPrefilledBankAccount {
    account_type?: BillingRequestFlowPrefilledBankAccountAccountType;
}
export declare enum BillingRequestFlowPrefilledBankAccountAccountType {
    Savings = "savings",
    Checking = "checking"
}
/** Type for a billingrequestflowprefilledcustomer resource. */
export interface BillingRequestFlowPrefilledCustomer {
    address_line1?: string | null;
    address_line2?: string | null;
    address_line3?: string | null;
    city?: string | null;
    company_name?: string | null;
    country_code?: string | null;
    danish_identity_number?: string | null;
    email?: string | null;
    family_name?: string | null;
    given_name?: string | null;
    postal_code?: string | null;
    region?: string | null;
    swedish_identity_number?: string | null;
}
/** Type for a billingrequesttemplate resource. */
export interface BillingRequestTemplate {
    authorisation_url?: string;
    created_at?: string;
    id?: string;
    mandate_request_currency?: string;
    mandate_request_description?: string | null;
    mandate_request_metadata?: JsonMap | null;
    mandate_request_scheme?: string | null;
    mandate_request_verify?: BillingRequestTemplateMandateRequestVerify;
    metadata?: JsonMap;
    name?: string;
    payment_request_amount?: string;
    payment_request_currency?: string;
    payment_request_description?: string | null;
    payment_request_metadata?: JsonMap | null;
    payment_request_scheme?: string | null;
    redirect_uri?: string | null;
    updated_at?: string;
}
/** Type for a billingrequesttemplatecreaterequestlinks resource. */
export interface BillingRequestTemplateCreateRequestLinks {
    creditor?: string;
}
export declare enum BillingRequestTemplateMandateRequestVerify {
    Minimum = "minimum",
    Recommended = "recommended",
    WhenAvailable = "when_available",
    Always = "always"
}
/** Type for a block resource. */
export interface Block {
    active?: boolean | null;
    block_type?: BlockBlockType;
    created_at?: string;
    id?: string;
    reason_description?: string | null;
    reason_type?: BlockReasonType;
    resource_reference?: string;
    updated_at?: string;
}
export declare enum BlockReferenceType {
    Customer = "customer",
    Mandate = "mandate"
}
export declare enum BlockBlockType {
    Email = "email",
    EmailDomain = "email_domain",
    BankAccount = "bank_account",
    BankName = "bank_name"
}
export declare enum BlockReasonType {
    IdentityFraud = "identity_fraud",
    NoIntentToPay = "no_intent_to_pay",
    UnfairChargeback = "unfair_chargeback",
    Other = "other"
}
/** Type for a creditor resource. */
export interface Creditor {
    address_line1?: string | null;
    address_line2?: string | null;
    address_line3?: string | null;
    bank_reference_prefix?: string;
    can_create_refunds?: boolean;
    city?: string | null;
    country_code?: string | null;
    created_at?: string;
    creditor_type?: CreditorCreditorType;
    custom_payment_pages_enabled?: boolean;
    fx_payout_currency?: CreditorFxPayoutCurrency;
    id?: string;
    links?: CreditorLinks;
    logo_url?: string | null;
    mandate_imports_enabled?: boolean;
    merchant_responsible_for_notifications?: boolean;
    name?: string;
    postal_code?: string | null;
    region?: string | null;
    scheme_identifiers?: CreditorSchemeIdentifier[];
    verification_status?: CreditorVerificationStatus;
}
/** Type for a creditorupdaterequestlinks resource. */
export interface CreditorUpdateRequestLinks {
    default_aud_payout_account?: string | null;
    default_cad_payout_account?: string | null;
    default_dkk_payout_account?: string | null;
    default_eur_payout_account?: string | null;
    default_gbp_payout_account?: string | null;
    default_nzd_payout_account?: string | null;
    default_sek_payout_account?: string | null;
    default_usd_payout_account?: string | null;
}
export declare enum CreditorCreditorType {
    Company = "company",
    Individual = "individual",
    Charity = "charity",
    Partnership = "partnership",
    Trust = "trust"
}
export declare enum CreditorFxPayoutCurrency {
    AUD = "AUD",
    CAD = "CAD",
    DKK = "DKK",
    EUR = "EUR",
    GBP = "GBP",
    NZD = "NZD",
    SEK = "SEK",
    USD = "USD"
}
/** Type for a creditorlinks resource. */
export interface CreditorLinks {
    default_aud_payout_account?: string | null;
    default_cad_payout_account?: string | null;
    default_dkk_payout_account?: string | null;
    default_eur_payout_account?: string | null;
    default_gbp_payout_account?: string | null;
    default_nzd_payout_account?: string | null;
    default_sek_payout_account?: string | null;
    default_usd_payout_account?: string | null;
}
/** Type for a creditorschemeidentifier resource. */
export interface CreditorSchemeIdentifier {
    address_line1?: string;
    address_line2?: string | null;
    address_line3?: string | null;
    can_specify_mandate_reference?: boolean;
    city?: string;
    country_code?: string;
    created_at?: string;
    currency?: CreditorSchemeIdentifierCurrency;
    email?: string;
    id?: string;
    minimum_advance_notice?: number;
    name?: string;
    phone_number?: string;
    postal_code?: string;
    reference?: string;
    region?: string | null;
    scheme?: CreditorSchemeIdentifierScheme;
    status?: CreditorSchemeIdentifierStatus;
}
export declare enum CreditorSchemeIdentifierCurrency {
    AUD = "AUD",
    CAD = "CAD",
    DKK = "DKK",
    EUR = "EUR",
    GBP = "GBP",
    NZD = "NZD",
    SEK = "SEK",
    USD = "USD"
}
export declare enum CreditorSchemeIdentifierScheme {
    Ach = "ach",
    Autogiro = "autogiro",
    Bacs = "bacs",
    Becs = "becs",
    BecsNz = "becs_nz",
    Betalingsservice = "betalingsservice",
    FasterPayments = "faster_payments",
    Pad = "pad",
    PayTo = "pay_to",
    Sepa = "sepa",
    SepaCreditTransfer = "sepa_credit_transfer",
    SepaInstantCreditTransfer = "sepa_instant_credit_transfer"
}
export declare enum CreditorSchemeIdentifierStatus {
    Pending = "pending",
    Active = "active"
}
export declare enum CreditorVerificationStatus {
    Successful = "successful",
    InReview = "in_review",
    ActionRequired = "action_required"
}
/** Type for a creditorbankaccount resource. */
export interface CreditorBankAccount {
    account_holder_name?: string;
    account_number_ending?: string;
    account_type?: CreditorBankAccountAccountType;
    bank_name?: string;
    country_code?: string | null;
    created_at?: string;
    currency?: string | null;
    enabled?: boolean;
    id?: string;
    links?: CreditorBankAccountLinks;
    metadata?: JsonMap;
    verification_status?: CreditorBankAccountVerificationStatus;
}
/** Type for a creditorbankaccountcreaterequestlinks resource. */
export interface CreditorBankAccountCreateRequestLinks {
    creditor: string;
}
export declare enum CreditorBankAccountAccountType {
    Savings = "savings",
    Checking = "checking"
}
/** Type for a creditorbankaccountlinks resource. */
export interface CreditorBankAccountLinks {
    creditor?: string;
}
export declare enum CreditorBankAccountVerificationStatus {
    Pending = "pending",
    InReview = "in_review",
    Successful = "successful",
    CouldNotVerify = "could_not_verify"
}
/** Type for a currencyexchangerate resource. */
export interface CurrencyExchangeRate {
    rate?: string;
    source?: string;
    target?: string;
    time?: string;
}
/** Type for a customer resource. */
export interface Customer {
    address_line1?: string | null;
    address_line2?: string | null;
    address_line3?: string | null;
    city?: string | null;
    company_name?: string | null;
    country_code?: string | null;
    created_at?: string;
    danish_identity_number?: string | null;
    email?: string | null;
    family_name?: string | null;
    given_name?: string | null;
    id?: string;
    language?: string | null;
    metadata?: JsonMap;
    phone_number?: string | null;
    postal_code?: string | null;
    region?: string | null;
    swedish_identity_number?: string | null;
}
export declare enum CustomerCurrency {
    AUD = "AUD",
    CAD = "CAD",
    DKK = "DKK",
    EUR = "EUR",
    GBP = "GBP",
    NZD = "NZD",
    SEK = "SEK",
    USD = "USD"
}
export declare enum CustomerSortDirection {
    Asc = "asc",
    Desc = "desc"
}
export declare enum CustomerSortField {
    Name = "name",
    CompanyName = "company_name",
    CreatedAt = "created_at"
}
/** Type for a customerbankaccount resource. */
export interface CustomerBankAccount {
    account_holder_name?: string;
    account_number_ending?: string;
    account_type?: CustomerBankAccountAccountType;
    bank_name?: string;
    country_code?: string | null;
    created_at?: string;
    currency?: string | null;
    enabled?: boolean;
    id?: string;
    links?: CustomerBankAccountLinks;
    metadata?: JsonMap;
}
/** Type for a customerbankaccountcreaterequestlinks resource. */
export interface CustomerBankAccountCreateRequestLinks {
    customer: string;
    customer_bank_account_token?: string;
}
export declare enum CustomerBankAccountAccountType {
    Savings = "savings",
    Checking = "checking"
}
/** Type for a customerbankaccountlinks resource. */
export interface CustomerBankAccountLinks {
    customer?: string;
}
/** Type for a customernotification resource. */
export interface CustomerNotification {
    action_taken?: CustomerNotificationActionTaken;
    action_taken_at?: string | null;
    action_taken_by?: string | null;
    id?: string;
    links?: CustomerNotificationLinks;
    type?: CustomerNotificationType;
}
export declare enum CustomerNotificationActionTaken {
    Handled = "handled"
}
/** Type for a customernotificationlinks resource. */
export interface CustomerNotificationLinks {
    customer: string;
    event: string;
    mandate?: string;
    payment?: string;
    refund?: string;
    subscription?: string;
}
export declare enum CustomerNotificationType {
    PaymentCreated = "payment_created",
    PaymentCancelled = "payment_cancelled",
    MandateCreated = "mandate_created",
    MandateBlocked = "mandate_blocked",
    SubscriptionCreated = "subscription_created",
    SubscriptionCancelled = "subscription_cancelled",
    InstalmentScheduleCreated = "instalment_schedule_created",
    InstalmentScheduleCancelled = "instalment_schedule_cancelled"
}
/** Type for a event resource. */
export interface Event {
    action?: string;
    created_at?: string;
    customer_notifications?: EventCustomerNotification[] | null;
    details?: EventDetails;
    id?: string;
    links?: EventLinks;
    metadata?: JsonMap;
    resource_metadata?: JsonMap;
    resource_type?: EventResourceType;
}
export declare enum EventInclude {
    BillingRequest = "billing_request",
    Creditor = "creditor",
    InstalmentSchedule = "instalment_schedule",
    Mandate = "mandate",
    PayerAuthorisation = "payer_authorisation",
    Payment = "payment",
    Payout = "payout",
    Refund = "refund",
    SchemeIdentifier = "scheme_identifier",
    Subscription = "subscription"
}
/** Type for a eventcustomernotification resource. */
export interface EventCustomerNotification {
    deadline?: string;
    id?: string;
    mandatory?: boolean;
    type?: string;
}
/** Type for a eventdetails resource. */
export interface EventDetails {
    bank_account_id?: string;
    cause?: string;
    currency?: string;
    description?: string;
    not_retried_reason?: string;
    origin?: EventDetailsOrigin;
    property?: string;
    reason_code?: string;
    scheme?: EventDetailsScheme;
    will_attempt_retry?: boolean;
}
export declare enum EventDetailsOrigin {
    Bank = "bank",
    Api = "api",
    Gocardless = "gocardless",
    Customer = "customer",
    Payer = "payer"
}
export declare enum EventDetailsScheme {
    Ach = "ach",
    Autogiro = "autogiro",
    Bacs = "bacs",
    Becs = "becs",
    BecsNz = "becs_nz",
    Betalingsservice = "betalingsservice",
    FasterPayments = "faster_payments",
    Pad = "pad",
    PayTo = "pay_to",
    SepaCore = "sepa_core",
    SepaCor1 = "sepa_cor1"
}
/** Type for a eventlinks resource. */
export interface EventLinks {
    bank_authorisation?: string;
    billing_request?: string;
    billing_request_flow?: string;
    creditor?: string;
    customer?: string;
    customer_bank_account?: string;
    instalment_schedule?: string;
    mandate?: string;
    mandate_request_mandate?: string;
    new_customer_bank_account?: string;
    new_mandate?: string;
    organisation?: string;
    parent_event?: string;
    payer_authorisation?: string;
    payment?: string;
    payment_request_payment?: string;
    payout?: string;
    previous_customer_bank_account?: string;
    refund?: string;
    scheme_identifier?: string;
    subscription?: string;
}
export declare enum EventResourceType {
    BillingRequests = "billing_requests",
    Creditors = "creditors",
    InstalmentSchedules = "instalment_schedules",
    Mandates = "mandates",
    Organisations = "organisations",
    PayerAuthorisations = "payer_authorisations",
    Payments = "payments",
    Payouts = "payouts",
    Refunds = "refunds",
    SchemeIdentifiers = "scheme_identifiers",
    Subscriptions = "subscriptions"
}
/** Type for a instalmentschedule resource. */
export interface InstalmentSchedule {
    created_at?: string;
    currency?: InstalmentScheduleCurrency;
    id?: string;
    links?: InstalmentScheduleLinks;
    metadata?: JsonMap;
    name?: string;
    payment_errors?: JsonMap;
    status?: InstalmentScheduleStatus;
    total_amount?: string;
}
/** Type for a instalmentscheduleinstalment resource. */
export interface InstalmentScheduleInstalment {
    amount: string;
    charge_date: string | null;
    description?: string | null;
}
/** Type for a instalmentschedulecreatewithdatesrequestlinks resource. */
export interface InstalmentScheduleCreateWithDatesRequestLinks {
    mandate: string;
}
/** Type for a instalmentscheduleinstalments resource. */
export interface InstalmentScheduleInstalments {
    amounts: string[];
    interval: number;
    interval_unit: InstalmentScheduleInstalmentsIntervalUnit;
    start_date?: string | null;
}
export declare enum InstalmentScheduleInstalmentsIntervalUnit {
    Weekly = "weekly",
    Monthly = "monthly",
    Yearly = "yearly"
}
/** Type for a instalmentschedulecreatewithschedulerequestlinks resource. */
export interface InstalmentScheduleCreateWithScheduleRequestLinks {
    mandate: string;
}
export declare enum InstalmentScheduleCurrency {
    AUD = "AUD",
    CAD = "CAD",
    DKK = "DKK",
    EUR = "EUR",
    GBP = "GBP",
    NZD = "NZD",
    SEK = "SEK",
    USD = "USD"
}
/** Type for a instalmentschedulelinks resource. */
export interface InstalmentScheduleLinks {
    customer: string;
    mandate: string;
    payments?: string[];
}
export declare enum InstalmentScheduleStatus {
    Pending = "pending",
    Active = "active",
    CreationFailed = "creation_failed",
    Completed = "completed",
    Cancelled = "cancelled",
    Errored = "errored"
}
/** Type for a institution resource. */
export interface Institution {
    autocompletes_collect_bank_account?: boolean;
    country_code?: string;
    icon_url?: string;
    id?: string;
    logo_url?: string;
    name?: string;
}
/** Type for a institutionid resource. */
export interface InstitutionId {
}
/** Type for a logo resource. */
export interface Logo {
    id?: string;
}
/** Type for a logocreateforcreditorrequestlinks resource. */
export interface LogoCreateForCreditorRequestLinks {
    creditor?: string;
}
/** Type for a mandate resource. */
export interface Mandate {
    authorisation_source?: MandateAuthorisationSource;
    consent_parameters?: MandateConsentParameters | null;
    created_at?: string;
    funds_settlement?: MandateFundsSettlement;
    id?: string;
    links?: MandateLinks;
    metadata?: JsonMap;
    next_possible_charge_date?: string | null;
    next_possible_standard_ach_charge_date?: string | null;
    payments_require_approval?: boolean;
    reference?: string | null;
    scheme?: string | null;
    status?: MandateStatus;
    verified_at?: string | null;
}
/** Type for a mandatecreaterequestlinks resource. */
export interface MandateCreateRequestLinks {
    creditor?: string;
    customer_bank_account: string;
}
export declare enum MandateAuthorisationSource {
    Web = "web",
    Telephone = "telephone",
    Paper = "paper"
}
/** Type for a mandateconsentparameters resource. */
export interface MandateConsentParameters {
    end_date?: string;
    max_amount_per_payment?: number;
    periods?: MandateConsentParametersPeriod[];
    start_date?: string;
}
/** Type for a mandateconsentparametersperiod resource. */
export interface MandateConsentParametersPeriod {
    max_amount_per_period?: number;
    max_payments_per_period?: number;
    period?: MandateConsentParametersPeriodPeriod;
}
export declare enum MandateConsentParametersPeriodPeriod {
    Day = "day",
    Week = "week",
    Month = "month",
    Year = "year",
    Flexible = "flexible"
}
export declare enum MandateFundsSettlement {
    Managed = "managed",
    Direct = "direct"
}
/** Type for a mandatelinks resource. */
export interface MandateLinks {
    creditor?: string;
    customer?: string;
    customer_bank_account?: string;
    new_mandate?: string;
}
export declare enum MandateStatus {
    PendingCustomerApproval = "pending_customer_approval",
    PendingSubmission = "pending_submission",
    Submitted = "submitted",
    Active = "active",
    Failed = "failed",
    Cancelled = "cancelled",
    Expired = "expired",
    Consumed = "consumed",
    Blocked = "blocked",
    SuspendedByPayer = "suspended_by_payer"
}
/** Type for a mandateimport resource. */
export interface MandateImport {
    created_at?: string;
    id?: string;
    links?: MandateImportLinks;
    scheme?: MandateImportScheme;
    status?: MandateImportStatus;
}
/** Type for a mandateimportcreaterequestlinks resource. */
export interface MandateImportCreateRequestLinks {
    creditor?: string;
}
/** Type for a mandateimportlinks resource. */
export interface MandateImportLinks {
    creditor?: string;
}
export declare enum MandateImportScheme {
    Ach = "ach",
    Autogiro = "autogiro",
    Bacs = "bacs",
    Becs = "becs",
    BecsNz = "becs_nz",
    Betalingsservice = "betalingsservice",
    FasterPayments = "faster_payments",
    Pad = "pad",
    PayTo = "pay_to",
    SepaCore = "sepa_core"
}
export declare enum MandateImportStatus {
    Created = "created",
    Submitted = "submitted",
    Cancelled = "cancelled",
    Processing = "processing",
    Processed = "processed"
}
/** Type for a mandateimportentry resource. */
export interface MandateImportEntry {
    created_at?: string;
    links?: MandateImportEntryLinks;
    record_identifier?: string | null;
}
/** Type for a mandateimportentryamendment resource. */
export interface MandateImportEntryAmendment {
    original_creditor_id: string;
    original_creditor_name: string;
    original_mandate_reference: string;
}
/** Type for a mandateimportentrybankaccount resource. */
export interface MandateImportEntryBankAccount {
    account_holder_name: string;
    account_number?: string | null;
    bank_code?: string | null;
    branch_code?: string | null;
    country_code?: string | null;
    iban?: string | null;
}
/** Type for a mandateimportentrycustomer resource. */
export interface MandateImportEntryCustomer {
    address_line1?: string;
    address_line2?: string | null;
    address_line3?: string | null;
    city?: string | null;
    company_name?: string | null;
    country_code?: string | null;
    danish_identity_number?: string | null;
    email?: string | null;
    family_name?: string | null;
    given_name?: string | null;
    language?: string | null;
    phone_number?: string | null;
    postal_code?: string;
    region?: string | null;
    swedish_identity_number?: string | null;
}
/** Type for a mandateimportentrycreaterequestlinks resource. */
export interface MandateImportEntryCreateRequestLinks {
    mandate_import: string;
}
/** Type for a mandateimportentrymandate resource. */
export interface MandateImportEntryMandate {
    reference?: string | null;
}
/** Type for a mandateimportentrylinks resource. */
export interface MandateImportEntryLinks {
    customer?: string;
    customer_bank_account?: string;
    mandate?: string;
    mandate_import: string;
}
/** Type for a mandatepdf resource. */
export interface MandatePdf {
    expires_at?: string;
    url?: string;
}
export declare enum MandatePdfAccountType {
    Savings = "savings",
    Checking = "checking"
}
/** Type for a mandatepdfcreaterequestlinks resource. */
export interface MandatePdfCreateRequestLinks {
    mandate?: string;
}
export declare enum MandatePdfSubscriptionFrequency {
    Weekly = "weekly",
    Monthly = "monthly",
    Yearly = "yearly"
}
/** Type for a negativebalancelimit resource. */
export interface NegativeBalanceLimit {
    balance_limit?: string;
    created_at?: string;
    currency?: NegativeBalanceLimitCurrency;
    id?: string;
    links?: NegativeBalanceLimitLinks;
}
/** Type for a negativebalancelimitcreaterequestlinks resource. */
export interface NegativeBalanceLimitCreateRequestLinks {
    creditor: string;
}
export declare enum NegativeBalanceLimitCurrency {
    AUD = "AUD",
    CAD = "CAD",
    DKK = "DKK",
    EUR = "EUR",
    GBP = "GBP",
    NZD = "NZD",
    SEK = "SEK",
    USD = "USD"
}
/** Type for a negativebalancelimitlinks resource. */
export interface NegativeBalanceLimitLinks {
    creator_user?: string;
    creditor?: string;
}
/** Type for a payerauthorisation resource. */
export interface PayerAuthorisation {
    bank_account?: PayerAuthorisationBankAccount;
    created_at?: string | null;
    customer?: PayerAuthorisationCustomer;
    id?: string;
    incomplete_fields?: PayerAuthorisationIncompleteField[];
    links?: PayerAuthorisationLinks;
    mandate?: PayerAuthorisationMandate;
    status?: PayerAuthorisationStatus;
}
/** Type for a payerauthorisationbankaccount resource. */
export interface PayerAuthorisationBankAccount {
    account_holder_name?: string;
    account_number?: string | null;
    account_number_ending?: string;
    account_number_suffix?: string | null;
    account_type?: PayerAuthorisationBankAccountAccountType;
    bank_code?: string | null;
    branch_code?: string | null;
    country_code?: string | null;
    currency?: string | null;
    iban?: string | null;
    metadata?: JsonMap;
}
export declare enum PayerAuthorisationBankAccountAccountType {
    Savings = "savings",
    Checking = "checking"
}
/** Type for a payerauthorisationcustomer resource. */
export interface PayerAuthorisationCustomer {
    address_line1?: string | null;
    address_line2?: string | null;
    address_line3?: string | null;
    city?: string | null;
    company_name?: string | null;
    country_code?: string | null;
    danish_identity_number?: string | null;
    email?: string | null;
    family_name?: string | null;
    given_name?: string | null;
    locale?: string | null;
    metadata?: JsonMap;
    postal_code?: string | null;
    region?: string | null;
    swedish_identity_number?: string | null;
}
/** Type for a payerauthorisationincompletefield resource. */
export interface PayerAuthorisationIncompleteField {
    field?: string;
    message?: string;
    request_pointer?: string;
}
/** Type for a payerauthorisationlinks resource. */
export interface PayerAuthorisationLinks {
    bank_account?: string;
    customer?: string;
    mandate?: string;
}
/** Type for a payerauthorisationmandate resource. */
export interface PayerAuthorisationMandate {
    metadata?: JsonMap;
    payer_ip_address?: string | null;
    reference?: string | null;
    scheme?: PayerAuthorisationMandateScheme;
}
export declare enum PayerAuthorisationMandateScheme {
    Ach = "ach",
    Autogiro = "autogiro",
    Bacs = "bacs",
    Becs = "becs",
    BecsNz = "becs_nz",
    Betalingsservice = "betalingsservice",
    FasterPayments = "faster_payments",
    Pad = "pad",
    PayTo = "pay_to",
    SepaCore = "sepa_core"
}
export declare enum PayerAuthorisationStatus {
    Created = "created",
    Submitted = "submitted",
    Confirmed = "confirmed",
    Completed = "completed",
    Failed = "failed"
}
/** Type for a payertheme resource. */
export interface PayerTheme {
    id?: string;
}
/** Type for a payerthemecreateforcreditorrequestlinks resource. */
export interface PayerThemeCreateForCreditorRequestLinks {
    creditor?: string | null;
}
/** Type for a payment resource. */
export interface Payment {
    amount?: string;
    amount_refunded?: string;
    charge_date?: string | null;
    created_at?: string;
    currency?: PaymentCurrency;
    description?: string | null;
    faster_ach?: boolean | null;
    fx?: PaymentFx;
    id?: string;
    links?: PaymentLinks;
    metadata?: JsonMap;
    reference?: string | null;
    retry_if_possible?: boolean;
    status?: PaymentStatus;
}
/** Type for a paymentcreaterequestlinks resource. */
export interface PaymentCreateRequestLinks {
    mandate: string;
}
/** Type for a paymentchargedate resource. */
export interface PaymentChargeDate {
    gt?: string;
    gte?: string;
    lt?: string;
    lte?: string;
}
export declare enum PaymentSortDirection {
    Asc = "asc",
    Desc = "desc"
}
export declare enum PaymentSortField {
    ChargeDate = "charge_date",
    Amount = "amount"
}
export declare enum PaymentCurrency {
    AUD = "AUD",
    CAD = "CAD",
    DKK = "DKK",
    EUR = "EUR",
    GBP = "GBP",
    NZD = "NZD",
    SEK = "SEK",
    USD = "USD"
}
/** Type for a paymentfx resource. */
export interface PaymentFx {
    estimated_exchange_rate?: string | null;
    exchange_rate?: string | null;
    fx_amount?: string | null;
    fx_currency?: PaymentFxFxCurrency;
}
export declare enum PaymentFxFxCurrency {
    AUD = "AUD",
    CAD = "CAD",
    DKK = "DKK",
    EUR = "EUR",
    GBP = "GBP",
    NZD = "NZD",
    SEK = "SEK",
    USD = "USD"
}
/** Type for a paymentlinks resource. */
export interface PaymentLinks {
    creditor?: string;
    instalment_schedule?: string;
    mandate?: string;
    payout?: string;
    subscription?: string;
}
export declare enum PaymentStatus {
    PendingCustomerApproval = "pending_customer_approval",
    PendingSubmission = "pending_submission",
    Submitted = "submitted",
    Confirmed = "confirmed",
    PaidOut = "paid_out",
    Cancelled = "cancelled",
    CustomerApprovalDenied = "customer_approval_denied",
    Failed = "failed",
    ChargedBack = "charged_back"
}
/** Type for a payout resource. */
export interface Payout {
    amount?: string;
    arrival_date?: string | null;
    created_at?: string;
    currency?: PayoutCurrency;
    deducted_fees?: string;
    fx?: PayoutFx;
    id?: string;
    links?: PayoutLinks;
    metadata?: JsonMap;
    payout_type?: PayoutPayoutType;
    reference?: string;
    status?: PayoutStatus;
    tax_currency?: string | null;
}
export declare enum PayoutCurrency {
    AUD = "AUD",
    CAD = "CAD",
    DKK = "DKK",
    EUR = "EUR",
    GBP = "GBP",
    NZD = "NZD",
    SEK = "SEK",
    USD = "USD"
}
/** Type for a payoutfx resource. */
export interface PayoutFx {
    estimated_exchange_rate?: string | null;
    exchange_rate?: string | null;
    fx_amount?: string | null;
    fx_currency?: PayoutFxFxCurrency;
}
export declare enum PayoutFxFxCurrency {
    AUD = "AUD",
    CAD = "CAD",
    DKK = "DKK",
    EUR = "EUR",
    GBP = "GBP",
    NZD = "NZD",
    SEK = "SEK",
    USD = "USD"
}
/** Type for a payoutlinks resource. */
export interface PayoutLinks {
    creditor?: string;
    creditor_bank_account?: string;
}
export declare enum PayoutPayoutType {
    Merchant = "merchant",
    Partner = "partner"
}
export declare enum PayoutStatus {
    Pending = "pending",
    Paid = "paid",
    Bounced = "bounced"
}
/** Type for a payoutitem resource. */
export interface PayoutItem {
    amount?: string;
    links?: PayoutItemLinks;
    taxes?: PayoutItemTaxis[];
    type?: PayoutItemType;
}
export declare enum PayoutItemInclude2020TaxCutover {
    True = "true",
    False = "false"
}
/** Type for a payoutitemlinks resource. */
export interface PayoutItemLinks {
    mandate?: string;
    payment?: string;
    refund?: string;
}
/** Type for a payoutitemtaxis resource. */
export interface PayoutItemTaxis {
    amount?: string;
    currency?: PayoutItemTaxisCurrency;
    destination_amount?: string | null;
    destination_currency?: string;
    exchange_rate?: string | null;
    tax_rate_id?: string;
}
export declare enum PayoutItemTaxisCurrency {
    AUD = "AUD",
    CAD = "CAD",
    DKK = "DKK",
    EUR = "EUR",
    GBP = "GBP",
    NZD = "NZD",
    SEK = "SEK",
    USD = "USD"
}
export declare enum PayoutItemType {
    PaymentPaidOut = "payment_paid_out",
    PaymentFailed = "payment_failed",
    PaymentChargedBack = "payment_charged_back",
    PaymentRefunded = "payment_refunded",
    Refund = "refund",
    GocardlessFee = "gocardless_fee",
    AppFee = "app_fee",
    RevenueShare = "revenue_share",
    SurchargeFee = "surcharge_fee",
    RefundFundsReturned = "refund_funds_returned"
}
/** Type for a redirectflow resource. */
export interface RedirectFlow {
    confirmation_url?: string;
    created_at?: string;
    description?: string;
    id?: string;
    links?: RedirectFlowLinks;
    mandate_reference?: string;
    metadata?: JsonMap;
    redirect_url?: string;
    scheme?: RedirectFlowScheme;
    session_token?: string;
    success_redirect_url?: string;
}
/** Type for a redirectflowcreaterequestlinks resource. */
export interface RedirectFlowCreateRequestLinks {
    creditor?: string;
}
/** Type for a redirectflowprefilledbankaccount resource. */
export interface RedirectFlowPrefilledBankAccount {
    account_type?: RedirectFlowPrefilledBankAccountAccountType;
}
export declare enum RedirectFlowPrefilledBankAccountAccountType {
    Savings = "savings",
    Checking = "checking"
}
/** Type for a redirectflowprefilledcustomer resource. */
export interface RedirectFlowPrefilledCustomer {
    address_line1?: string | null;
    address_line2?: string | null;
    address_line3?: string | null;
    city?: string | null;
    company_name?: string | null;
    country_code?: string | null;
    danish_identity_number?: string | null;
    email?: string | null;
    family_name?: string | null;
    given_name?: string | null;
    language?: string | null;
    phone_number?: string | null;
    postal_code?: string | null;
    region?: string | null;
    swedish_identity_number?: string | null;
}
/** Type for a redirectflowlinks resource. */
export interface RedirectFlowLinks {
    billing_request?: string;
    creditor?: string;
    customer?: string;
    customer_bank_account?: string;
    mandate?: string;
}
export declare enum RedirectFlowScheme {
    Ach = "ach",
    Autogiro = "autogiro",
    Bacs = "bacs",
    Becs = "becs",
    BecsNz = "becs_nz",
    Betalingsservice = "betalingsservice",
    Pad = "pad",
    SepaCore = "sepa_core"
}
/** Type for a refund resource. */
export interface Refund {
    amount?: string;
    created_at?: string;
    currency?: string;
    fx?: RefundFx;
    id?: string;
    links?: RefundLinks;
    metadata?: JsonMap;
    reference?: string | null;
    status?: RefundStatus;
}
/** Type for a refundcreaterequestlinks resource. */
export interface RefundCreateRequestLinks {
    mandate?: string;
    payment?: string;
}
export declare enum RefundRefundType {
    Mandate = "mandate",
    Payment = "payment"
}
/** Type for a refundfx resource. */
export interface RefundFx {
    estimated_exchange_rate?: string | null;
    exchange_rate?: string | null;
    fx_amount?: string | null;
    fx_currency?: RefundFxFxCurrency;
}
export declare enum RefundFxFxCurrency {
    AUD = "AUD",
    CAD = "CAD",
    DKK = "DKK",
    EUR = "EUR",
    GBP = "GBP",
    NZD = "NZD",
    SEK = "SEK",
    USD = "USD"
}
/** Type for a refundlinks resource. */
export interface RefundLinks {
    mandate?: string;
    payment?: string;
}
export declare enum RefundStatus {
    Created = "created",
    PendingSubmission = "pending_submission",
    Submitted = "submitted",
    Paid = "paid",
    Cancelled = "cancelled",
    Bounced = "bounced",
    FundsReturned = "funds_returned"
}
/** Type for a scenariosimulator resource. */
export interface ScenarioSimulator {
    id?: string;
}
/** Type for a scenariosimulatorrunrequestlinks resource. */
export interface ScenarioSimulatorRunRequestLinks {
    resource: string;
}
/** Type for a schemeidentifier resource. */
export interface SchemeIdentifier {
    address_line1?: string;
    address_line2?: string | null;
    address_line3?: string | null;
    can_specify_mandate_reference?: boolean;
    city?: string;
    country_code?: string;
    created_at?: string;
    currency?: SchemeIdentifierCurrency;
    email?: string;
    id?: string;
    minimum_advance_notice?: number;
    name?: string;
    phone_number?: string;
    postal_code?: string;
    reference?: string;
    region?: string | null;
    scheme?: SchemeIdentifierScheme;
    status?: SchemeIdentifierStatus;
}
/** Type for a schemeidentifiercreaterequestlinks resource. */
export interface SchemeIdentifierCreateRequestLinks {
    creditor?: string;
}
export declare enum SchemeIdentifierCurrency {
    AUD = "AUD",
    CAD = "CAD",
    DKK = "DKK",
    EUR = "EUR",
    GBP = "GBP",
    NZD = "NZD",
    SEK = "SEK",
    USD = "USD"
}
export declare enum SchemeIdentifierScheme {
    Ach = "ach",
    Autogiro = "autogiro",
    Bacs = "bacs",
    Becs = "becs",
    BecsNz = "becs_nz",
    Betalingsservice = "betalingsservice",
    FasterPayments = "faster_payments",
    Pad = "pad",
    PayTo = "pay_to",
    Sepa = "sepa",
    SepaCreditTransfer = "sepa_credit_transfer",
    SepaInstantCreditTransfer = "sepa_instant_credit_transfer"
}
export declare enum SchemeIdentifierStatus {
    Pending = "pending",
    Active = "active"
}
type JsonField = boolean | number | string | null;
export interface JsonMap {
    [key: string]: JsonField | JsonMap | JsonArray;
}
export interface JsonArray extends Array<JsonField> {
}
export interface APIResponse {
    __response__: object;
}
export interface Fx {
    exchange_rate: string;
    estimated_exchange_rate: string;
    fx_amount: string;
    fx_currency: FxCurrency;
}
export declare enum FxCurrency {
    AUD = "AUD",
    CAD = "CAD",
    DKK = "DKK",
    EUR = "EUR",
    GBP = "GBP",
    NZD = "NZD",
    SEK = "SEK",
    USD = "USD"
}
export interface CreatedAtFilter {
    gt?: string;
    gte?: string;
    lt?: string;
    lte?: string;
}
export interface ListMeta {
    limit: number;
    cursors: ListMetaCursor;
}
export interface ListMetaCursor {
    before: string | null;
    after: string | null;
}
/** Type for a subscription resource. */
export interface Subscription {
    amount?: string;
    app_fee?: string | null;
    count?: string | null;
    created_at?: string;
    customer?: string;
    currency?: string;
    day_of_month?: string | null;
    earliest_charge_date_after_resume?: string | null;
    end_date?: string | null;
    id?: string;
    interval?: string;
    interval_unit?: SubscriptionIntervalUnit;
    links?: SubscriptionLinks;
    metadata?: JsonMap;
    month?: SubscriptionMonth;
    name?: string | null;
    payment_reference?: string | null;
    retry_if_possible?: boolean;
    start_date?: string | null;
    status?: SubscriptionStatus;
    upcoming_payments?: SubscriptionUpcomingPayment[];
}
/** Type for a subscriptioncreaterequestlinks resource. */
export interface SubscriptionCreateRequestLinks {
    mandate: string;
}
export declare enum SubscriptionIntervalUnit {
    Weekly = "weekly",
    Monthly = "monthly",
    Yearly = "yearly"
}
/** Type for a subscriptionlinks resource. */
export interface SubscriptionLinks {
    mandate?: string;
}
export declare enum SubscriptionMonth {
    January = "january",
    February = "february",
    March = "march",
    April = "april",
    May = "may",
    June = "june",
    July = "july",
    August = "august",
    September = "september",
    October = "october",
    November = "november",
    December = "december"
}
export declare enum SubscriptionStatus {
    PendingCustomerApproval = "pending_customer_approval",
    CustomerApprovalDenied = "customer_approval_denied",
    Active = "active",
    Finished = "finished",
    Cancelled = "cancelled",
    Paused = "paused"
}
/** Type for a subscriptionupcomingpayment resource. */
export interface SubscriptionUpcomingPayment {
    amount?: string;
    charge_date?: string;
}
/** Type for a taxrate resource. */
export interface TaxRate {
    end_date?: string | null;
    id?: string;
    jurisdiction?: string;
    percentage?: string;
    start_date?: string;
    type?: string;
}
/** Type for a transferredmandate resource. */
export interface TransferredMandate {
    encrypted_customer_bank_details?: string;
    encrypted_decryption_key?: string;
    links?: TransferredMandateLinks;
    public_key_id?: string;
}
/** Type for a transferredmandatelinks resource. */
export interface TransferredMandateLinks {
    customer_bank_account?: string;
    mandate?: string;
}
/** Type for a verificationdetail resource. */
export interface VerificationDetail {
    address_line1?: string;
    address_line2?: string | null;
    address_line3?: string | null;
    city?: string;
    company_number?: string;
    description?: string;
    directors?: VerificationDetailDirector[];
    links?: VerificationDetailLinks;
    name?: string;
    postal_code?: string;
}
/** Type for a verificationdetailcreaterequestlinks resource. */
export interface VerificationDetailCreateRequestLinks {
    creditor: string;
}
/** Type for a verificationdetaildirector resource. */
export interface VerificationDetailDirector {
    city: string;
    country_code: string;
    date_of_birth: string;
    family_name: string;
    given_name: string;
    postal_code: string;
    street: string;
}
/** Type for a verificationdetaillinks resource. */
export interface VerificationDetailLinks {
    creditor?: string;
}
/** Type for a webhook resource. */
export interface Webhook {
    created_at?: string;
    id?: string;
    is_test?: boolean;
    request_body?: string;
    request_headers?: JsonMap;
    response_body?: string;
    response_body_truncated?: boolean;
    response_code?: number;
    response_headers?: JsonMap;
    response_headers_content_truncated?: boolean;
    response_headers_count_truncated?: boolean;
    successful?: boolean;
    url?: string;
}
export {};
