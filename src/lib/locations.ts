export interface CoverageDetail {
  label: string;
  value: string;
}

export interface LocationData {
  slug: string;
  city: string;
  fullName: string;
  ordinanceName: string;
  yearEstablished: string;
  heroTagline: string;
  overview: string;
  coverageDetails: CoverageDetail[];
  coveredUnits: string;
  rentCap: string;
  justCause: string;
  damages: string;
  relocationAssistance: string;
  exemptions: string[];
  whyStrong: string;
  tpaInteraction: string;
  faq: { q: string; a: string }[];
  // Optional city-specific sections rendered after "What is exempt" (paragraphs split on blank lines).
  extraSections?: { title: string; body: string }[];
  // Shows the office address, map, and client reviews (the city where the office is).
  showOffice?: boolean;
}

export const locations: LocationData[] = [
  {
    slug: 'california',
    city: 'California',
    fullName: 'California (Statewide)',
    ordinanceName: 'California Tenant Protection Act (AB 1482)',
    yearEstablished: '2020',
    heroTagline: 'Statewide tenant protections under California law.',
    overview:
      'The California Tenant Protection Act (AB 1482), effective January 1, 2020, established the first statewide rent control and just cause eviction protections in California history. While local ordinances in cities like San Francisco and Oakland often provide stronger protections, the TPA acts as a floor for millions of California tenants who are not covered by a local ordinance — or whose local ordinance does not cover their specific unit or tenancy.',
    coverageDetails: [
      { label: 'Rent cap', value: '5% + local CPI, never more than 10% per year' },
      { label: 'Just cause required', value: 'Yes — both at-fault and no-fault categories' },
      { label: 'Relocation assistance', value: '1 month\'s rent for no-fault evictions' },
      { label: 'Attorney fees', value: 'Yes — at court\'s discretion for material violations' },
      { label: 'Treble damages', value: 'Up to 3× actual damages for willful, oppressive, fraudulent, or malicious conduct' },
      { label: 'Effective date', value: 'January 1, 2020' },
    ],
    coveredUnits:
      'For the TPA to apply, both the unit and the tenancy must qualify. These are treated separately — a covered unit does not automatically mean a covered tenancy, and vice versa.\n\nCovered tenancy: A landlord cannot terminate the tenancy without just cause once the tenant has been there long enough. That protection generally begins after 12 months. However, if new adult tenants were added to the household before the original tenant reached 24 months, the protection only begins when either all tenants have been there at least 12 months, or one tenant has been there at least 24 months.\n\nCovered unit: Not every rental unit qualifies. Civil Code 1946.2 (the just cause provision) does not apply to units that fall under one of the statutory exemptions. See the exemptions section below for the most common ones.',
    rentCap:
      'Landlords may not increase rent by more than 5% plus the local CPI (Consumer Price Index) in any 12-month period, with a hard cap of 10% regardless of CPI. Only one rent increase is permitted per 12-month period.',
    justCause:
      'If the tenancy is covered and no exemption applies, the landlord must state a valid just cause reason in any termination notice. At-fault just causes include nonpayment of rent, breach of lease terms, nuisance, criminal activity on the premises, and refusal to allow the owner to enter after proper notice. No-fault just causes include owner or family member move-in, intent to demolish or substantially remodel the unit, withdrawal of the unit from the rental market, and compliance with a government order.',
    damages:
      'An owner who attempts to recover possession of a rental unit in material violation of the TPA is liable to the tenant for: (A) actual damages; (B) reasonable attorney\'s fees and costs, at the court\'s discretion; and (C) up to three times the actual damages upon a showing that the owner acted willfully or with oppression, fraud, or malice. Punitive damages may also be awarded. While local ordinances often provide mandatory attorney fees and treble damages more readily, the TPA does make these remedies available — particularly where the landlord\'s conduct was egregious.',
    relocationAssistance:
      'For no-fault just cause evictions, the landlord must provide the tenant with one month\'s rent as relocation assistance, or alternatively waive the final month\'s rent payment.',
    exemptions: [
      'Transient and tourist hotel occupancy as defined in Civil Code § 1940(b)',
      'Housing in a nonprofit hospital, religious facility, extended care facility, licensed residential care facility for the elderly, or adult residential facility',
      'Dormitories owned and operated by a higher education institution or a K–12 school',
      'Housing where the tenant shares a bathroom or kitchen with an owner who maintains their principal residence at the property',
      'Single-family owner-occupied residences — including where the owner-occupant rents no more than two units or bedrooms (including an ADU or JADU), and including mobilehomes',
      'A two-unit property in a single structure where the owner occupied one unit as their principal residence at the start of the tenancy, continues to live there, and neither unit is an ADU or JADU',
      'Housing issued a certificate of occupancy within the previous 15 years (the 15-year exemption does not apply to mobilehomes)',
      'Separately alienable residential property (including mobilehomes) — but only if the owner is not a REIT, corporation, LLC with at least one corporate member, or mobilehome park management — AND the tenant received the required written exemption notice. For tenancies started or renewed on or after July 1, 2020, this notice must appear in the rental agreement itself. For pre-July 1, 2020 tenancies, the notice was not required in the agreement but may have been given separately',
      'Deed-restricted affordable housing, or housing subject to a government subsidy agreement, for very low, low, or moderate income households as defined in Health and Safety Code § 50093',
    ],
    whyStrong:
      'The TPA is meaningful for tenants living in parts of California without any local rent ordinance — inland communities, smaller cities, and suburban areas where landlords previously had no obligation to show just cause before removing a tenant. For long-term tenants in qualifying units, it provides real and enforceable protection.',
    tpaInteraction:
      'Local ordinances and the TPA can both apply to the same tenancy, but they operate somewhat independently. Where a local ordinance provides stronger protections, those protections govern. The TPA acts as a floor — it does not preempt local laws that go further. Understanding which law applies (and how) to a specific tenancy requires careful analysis of the unit, the tenancy length, and the applicable jurisdiction.',
    faq: [
      {
        q: 'Does the TPA apply if I live in a city with its own rent control?',
        a: 'It depends on the specifics of your unit and tenancy. Local ordinances generally govern where they provide stronger protections, but the TPA and a local ordinance can both apply to different aspects of the same tenancy. Every situation requires individual analysis.',
      },
      {
        q: 'I moved in over a year ago, but my roommate was added more recently. Are we covered?',
        a: 'It depends on timing. If a new adult tenant was added before the original tenant hit 24 months, just cause protection only begins once either all tenants have been there 12 months or one tenant has been there 24 months. This rule is designed to prevent landlords from cycling in new roommates to reset the clock — but it can also delay when protections kick in.',
      },
      {
        q: 'My landlord gave me an exemption notice. Does that mean I have no rights?',
        a: 'Not necessarily. The exemption notice only removes TPA just cause protection for qualifying properties where proper notice was given. You may still have rights under a local ordinance, or under other California law. Additionally, if the exemption notice was defective — wrong language, not given at the right time — it may not be valid. Bowlay Law can evaluate your situation.',
      },
      {
        q: 'Can I bring a lawsuit under the TPA?',
        a: 'Yes. If your landlord has violated the TPA — by evicting you without a valid just cause, exceeding the rent cap, or failing to pay relocation assistance — you may have a civil claim for actual damages. Bowlay Law handles TPA cases on contingency.',
      },
    ],
  },
  {
    slug: 'san-francisco',
    city: 'San Francisco',
    fullName: 'San Francisco',
    ordinanceName: 'San Francisco Rent Ordinance (Administrative Code, Chapter 37)',
    yearEstablished: '1979',
    heroTagline: 'One of the strongest tenant protections in the country.',
    overview:
      'The San Francisco Rent Ordinance has protected San Francisco tenants since 1979 and remains one of the most comprehensive local tenant protection laws in the United States. It covers both rent control and just cause eviction for most pre-1979 units, and has been strengthened over the decades with relocation assistance requirements, anti-harassment protections, and robust enforcement through the San Francisco Rent Board.',
    coverageDetails: [
      { label: 'Rent cap', value: 'CPI-based, typically 1–3% annually (set by Rent Board)' },
      { label: 'Just cause required', value: 'Yes — 16 enumerated just causes' },
      { label: 'Relocation assistance', value: 'Yes — significant amounts for OMI and Ellis Act' },
      { label: 'Attorney fees', value: 'Yes — available for wrongful eviction claims' },
      { label: 'Treble damages', value: 'Up to 3× actual damages for wrongful eviction' },
    ],
    coveredUnits:
      'The Rent Ordinance covers most residential rental units in buildings of two or more units that were built or substantially rehabilitated before June 13, 1979. This includes apartments, flats, and rooms in most multi-unit buildings in San Francisco. Buildings and units constructed after that date may still be protected by just cause eviction requirements under AB 1482 (the statewide Tenant Protection Act), depending on the age of the unit.',
    rentCap:
      'Each March 1, the Rent Board publishes the allowable annual rent increase: 60% of the increase in the San Francisco CPI for the preceding 12 months, with a hard cap of 7% in any given year. Landlords who skip or partially impose an annual increase may bank the unused amount and apply it in a future year.\n\nBeyond the annual allowable increase, landlords may petition the Rent Board to pass through costs for capital improvements, rehabilitation, energy conservation or renewable energy improvements, utilities, water rate increases attributable to certain bond measures, and property tax increases attributable to eligible general obligation bonds of the City, the SF Unified School District, or SF Community College District. These additional increases require Board certification or approval and are subject to their own caps and procedures.\n\nA landlord may not increase rent solely because a tenant has added an occupant to the household — including a newborn child or family member as defined in the Housing Code — notwithstanding any lease provision that purports to allow such an increase.\n\nUnder Costa-Hawkins, landlords may set the initial rent freely when a new tenancy begins (vacancy decontrol). Once a tenancy is established, the annual rent control limits apply.',
    justCause:
      'Covered tenants may only be evicted for one of 16 specific just causes listed in the Rent Ordinance. At-fault just causes include nonpayment of rent, breach of lease terms, nuisance, illegal activity, and subletting without permission. No-fault just causes include owner move-in (OMI), Ellis Act (going out of the rental business), substantial rehabilitation, and demolition. Each just cause has specific procedural requirements that must be strictly followed.',
    damages:
      'A tenant who is wrongfully evicted under the SF Rent Ordinance may recover actual damages (including loss of housing, moving costs, and increased rent at a new location), punitive damages of up to three times actual damages, and attorney fees. These remedies make SF wrongful eviction cases among the most valuable in the state.',
    relocationAssistance:
      'San Francisco requires substantial relocation payments for certain no-fault evictions. For owner move-in and Ellis Act evictions, the amounts are set by the Rent Board and adjusted annually — often in the range of several months\' rent, with higher amounts for long-term tenants, elderly tenants, and tenants with disabilities.',
    exemptions: [
      'Units built after June 13, 1979 (exempt from rent control, but may still have just cause protections under AB 1482)',
      'Single-family homes where the owner has provided the required written exemption notice',
      'Condominiums sold separately from their building with proper notice given',
      'Hotels, motels, and short-term rentals',
      'Units in buildings where the owner lives and has fewer than two additional units in that building (in some circumstances)',
    ],
    whyStrong:
      'SF is one of the best jurisdictions in California for tenant rights cases. The Rent Board is active, treble damages are available, attorney fees are recoverable, and relocation payments for wrongful evictions can be substantial. Long-tenured tenants in SF with below-market rents often have the highest-value wrongful eviction claims in the state.',
    tpaInteraction:
      'For SF tenants in units built after June 13, 1979, the SF Rent Ordinance does not apply — but AB 1482 (TPA) may cover the tenancy if the unit is old enough. In those cases, the statewide just cause and rent cap rules apply, though the TPA does not provide attorney fees or treble damages.',
    faq: [
      {
        q: 'My landlord served me an owner move-in notice. Is that legal?',
        a: 'Owner move-in evictions are a valid just cause under the SF Rent Ordinance, but they come with strict requirements — the owner must actually intend to move in, must provide substantial relocation assistance, and may not re-rent the unit for a period after the eviction. If the owner did not move in, or misrepresented their intent, you may have a wrongful eviction claim.',
      },
      {
        q: 'What is an Ellis Act eviction?',
        a: 'An Ellis Act eviction occurs when a landlord withdraws the entire building from the rental market. It is a no-fault just cause under the SF Rent Ordinance, but it requires payment of significant relocation assistance and imposes restrictions on the owner\'s ability to re-rent the units for years afterward. If the eviction was not a genuine Ellis Act withdrawal, you may have a claim.',
      },
      {
        q: 'Can my landlord raise my rent to market rate when I move in?',
        a: 'No. For covered units, the Rent Ordinance limits annual increases to the allowable CPI-based amount. However, landlords may set the initial rent at whatever the market will bear when a new tenancy begins (vacancy decontrol). Once you are in, rent control applies.',
      },
      {
        q: 'How much is my wrongful eviction case worth in San Francisco?',
        a: 'The value depends on factors including how long you lived there, the difference between your controlled rent and current market rates, your damages, and available multipliers. SF wrongful eviction cases can be among the highest-value in the state. Contact Bowlay Law for a free case evaluation.',
      },
    ],
  },
  {
    slug: 'oakland',
    city: 'Oakland',
    showOffice: true,
    fullName: 'Oakland',
    ordinanceName: 'Oakland Rent Adjustment Program & Just Cause for Eviction Ordinance',
    yearEstablished: '1980',
    heroTagline: 'Broad just cause protections for most Oakland renters.',
    overview:
      'Oakland has two overlapping tenant protection systems: the Rent Adjustment Program (RAP), which limits rent increases on qualifying units, and the Just Cause for Eviction Ordinance, which requires a valid, listed reason to end a tenancy across a much broader set of rentals. A separate Tenant Protection Ordinance prohibits landlord harassment, and the City requires relocation payments for most no-fault evictions.',
    coverageDetails: [
      { label: 'Rent control (RAP)', value: '2.3% for increases effective Aug 1, 2026 through Jul 31, 2027; pre-1983 units' },
      { label: 'Just cause', value: 'Nearly all rentals except new construction under 10 years old' },
      { label: 'Relocation assistance', value: '$8,293 to $12,599, plus $2,500 for qualifying households (Jul 1, 2026 through Jun 30, 2027)' },
      { label: 'Attorney fees', value: 'Yes, for a tenant who wins a just cause case (OMC § 8.22.370)' },
      { label: 'Enhanced damages', value: 'Not less than 3× actual damages for wrongful eviction' },
    ],
    coveredUnits:
      'Rent control (Article I) generally covers units whose certificate of occupancy was issued before January 1, 1983, including owner-occupied duplexes and triplexes. Most single-family homes and condos (exempt under the state Costa-Hawkins Act) and government-subsidized units, including Section 8, are not rent-controlled.\n\nJust cause (Article II) covers almost every Oakland rental. The main exceptions are ground-up new construction with a certificate of occupancy issued in the last 10 years, and rooms where the owner lives in the unit and shares a kitchen or bathroom with the tenant. So a tenant in a newer building may not have rent control, but still cannot be evicted without a valid just cause.',
    rentCap:
      'For increases taking effect August 1, 2026 through July 31, 2027, the allowable annual increase for rent-controlled units is 2.3%. The City sets it at 60% of the change in the regional Consumer Price Index, capped at 3%. A landlord may raise the rent only once every 12 months, with at least 30 days\' written notice and the City\'s RAP Notice, and the unit must be registered with RAP.\n\nLandlords can "bank" increases they skipped in past years, but no single increase can exceed three times the current figure (6.9% this year). Anything more requires a RAP petition, and even then increases generally cannot exceed the state cap in one year (8.8% for the same period) or 30% over five years. A tenant has 180 days to challenge an unlawful increase with RAP.',
    justCause:
      'Oakland\'s Just Cause for Eviction Ordinance (Measure EE, 2002) allows a landlord to end a tenancy only for a listed reason, stated in the notice. The listed causes include nonpayment of rent, a continuing substantial lease violation after written notice, willful substantial damage, continuing to disturb other tenants, illegal use of the unit, denying lawful access after written notice, owner or qualifying-relative move-in, substantial repairs needed to meet health and safety codes (with permits pulled first, a three-month limit, and a right to return at the same rent), and withdrawal from the rental market under the Ellis Act. The end of a lease, a sale or foreclosure, and refusing to sign a new lease are not just causes. Every termination notice must be filed with RAP within 10 days of service.',
    damages:
      'If a landlord evicts or tries to evict in violation of the Just Cause Ordinance, the tenant can sue for not less than three times actual damages. Emotional distress damages are tripled only if the violation was knowing or reckless, and a tenant who wins recovers reasonable attorney\'s fees and costs (OMC § 8.22.370). Oakland\'s Tenant Protection Ordinance separately allows tenants to sue over landlord harassment.',
    relocationAssistance:
      'Owner or relative move-ins, Ellis Act withdrawals, code-compliance displacements, and condo conversions trigger relocation payments. For July 1, 2026 through June 30, 2027 the amounts are $8,293.13 for a studio or 1-bedroom, $10,206.93 for a 2-bedroom, and $12,599.18 for 3 or more bedrooms, plus one additional $2,500 payment per unit if the household includes a lower-income, elderly, or disabled tenant, or a minor child. Temporary displacement for code repairs pays actual temporary housing costs instead.',
    exemptions: [
      'Single-family homes and condos (from rent control under Costa-Hawkins; just cause usually still applies)',
      'Units newly built with a certificate of occupancy on or after January 1, 1983 (from rent control only; just cause applies once the certificate is more than 10 years old)',
      'Ground-up new construction with a certificate of occupancy issued in the last 10 years (from both rent control and just cause)',
      'Government-subsidized units, including Section 8 (from rent control; just cause still applies)',
      'Units where the owner lives in the unit and shares a kitchen or bathroom with the tenant (from just cause)',
      'Hotel and motel stays under 30 days (from both)',
    ],
    whyStrong:
      'Oakland\'s combination of rent control and broad just cause coverage, including for many newer units, makes it a strong jurisdiction for tenant rights cases. A wrongful eviction carries not less than three times actual damages plus attorney\'s fees, and the gap between controlled rents and market rates is often substantial.',
    tpaInteraction:
      'Where Oakland\'s Just Cause Ordinance covers a unit, Oakland\'s rules govern instead of the state Tenant Protection Act\'s just cause rules (Civ. Code § 1946.2). Rent-controlled units are exempt from the state rent cap (Civ. Code § 1947.12). The state cap (8.8% for August 1, 2026 through July 31, 2027) can apply to Oakland units that are not rent-controlled, such as post-1983 buildings at least 15 years old, or single-family homes and condos owned by a corporation or rented without the required exemption notice.',
    faq: [
      {
        q: 'My Oakland building was built after 1983. Do I still have rights?',
        a: 'Likely yes. You may not have rent control, but if your unit\'s certificate of occupancy is more than 10 years old, Oakland\'s just cause rules likely apply (Measure V, 2022), so your landlord needs a listed reason to end your tenancy. State law may also cap rent increases if the building is at least 15 years old.',
      },
      {
        q: 'My Oakland landlord told me to leave because they want to renovate. Is that allowed?',
        a: 'Only in narrow cases. Substantial repairs needed to bring the unit up to health and safety codes, with permits pulled before the notice, are a just cause. The landlord must offer you the unit back at the same rent when the work is done, generally within three months, and must pay relocation. Cosmetic upgrades or a general remodel are not a just cause.',
      },
      {
        q: 'Is my Oakland apartment covered by rent control?',
        a: 'Generally yes if your unit\'s certificate of occupancy was issued before January 1, 1983, including duplexes and triplexes where the owner lives on site. Most single-family homes, condos, and government-subsidized units (including Section 8) are not rent-controlled, though they are usually still protected by Oakland\'s just cause eviction rules. Coverage depends on the details of your building, and a free screening call can help sort it out.',
      },
      {
        q: 'How much can my Oakland landlord raise my rent this year?',
        a: 'If your unit is rent-controlled, the allowable increase is 2.3% for increases taking effect August 1, 2026 through July 31, 2027. Your landlord can raise the rent only once every 12 months, must give at least 30 days\' written notice with the City\'s RAP Notice, and cannot raise the rent on a unit that is not registered with the City. A landlord who skipped past increases may add some of them, but no single increase can exceed 6.9% this year without City approval. If your unit is not rent-controlled, state law may still cap increases at 8.8% for the same period. You have 180 days to challenge an unlawful increase with Oakland\'s Rent Adjustment Program.',
      },
      {
        q: 'Do I get relocation money if I am evicted for an owner move-in in Oakland?',
        a: 'Usually yes. For notices served from July 1, 2026 through June 30, 2027, the base payment is $8,293.13 for a studio or 1-bedroom, $10,206.93 for a 2-bedroom, and $12,599.18 for 3 or more bedrooms, with half due when the notice is served. Households with a lower-income, elderly, or disabled tenant, or a child, get one extra $2,500. Tenants who have lived there less than two years get a reduced amount. Tenants who have lived there five or more years and are 60 or older, disabled, or catastrophically ill generally cannot be evicted for an owner move-in at all.',
      },
      {
        q: 'My Oakland landlord evicted me to move in but never did. What can I do?',
        a: 'Oakland requires an owner who evicts for a move-in to live in the unit within three months, use it as a principal residence for at least 36 months, and file proof with the City. If the eviction was not for a real just cause, the Just Cause Ordinance lets the tenant sue for at least three times their actual damages, and a tenant who wins recovers attorney\'s fees. Deadlines apply, so it is worth getting your situation reviewed soon.',
      },
    ],
  },
  {
    slug: 'berkeley',
    city: 'Berkeley',
    fullName: 'Berkeley',
    ordinanceName: 'Berkeley Rent Stabilization Ordinance',
    yearEstablished: '1980',
    heroTagline: 'Among the strongest rent stabilization laws in California.',
    overview:
      'Berkeley\'s Rent Stabilization Ordinance, administered by the Berkeley Rent Stabilization Board, is widely recognized as one of the most protective tenant laws in California. It combines rent control with strong just cause eviction requirements, substantial relocation assistance, and meaningful enforcement. Berkeley tenants in covered units have some of the strongest legal protections in the state — and some of the most valuable wrongful eviction cases when landlords violate those protections.',
    coverageDetails: [
      { label: 'Rent cap', value: 'Adjusted annually, tied to 65% of CPI' },
      { label: 'Just cause required', value: 'Yes — comprehensive list of just causes' },
      { label: 'Relocation assistance', value: 'Yes — required for most no-fault evictions' },
      { label: 'Attorney fees', value: 'Yes — recoverable in wrongful eviction actions' },
      { label: 'Treble damages', value: 'Up to 3× rent available for certain violations' },
    ],
    coveredUnits:
      'The Berkeley RSO covers most residential rental units in buildings of three or more units that were built before January 1, 1980. This includes the large majority of Berkeley\'s rental housing stock, which consists primarily of pre-1980 multi-unit buildings. Some protections may also extend to units not covered by rent control through state law.',
    rentCap:
      'The Berkeley Rent Stabilization Board sets the annual allowable rent increase, typically equal to 65% of the increase in the Bay Area Consumer Price Index (CPI). This formula often produces one of the lowest allowable increases in California — frequently under 2%. Any rent increase beyond the annual allowance requires a petition and approval from the Rent Board.',
    justCause:
      'Covered tenants may only be evicted for specified just causes, including nonpayment of rent, lease violations, nuisance, owner move-in, Ellis Act withdrawal, substantial rehabilitation, and demolition. Berkeley\'s just cause provisions are strictly enforced and landlords must follow precise procedural requirements for each just cause.',
    damages:
      'Berkeley wrongful eviction cases can result in significant damages: actual damages (including the value of the tenancy and increased housing costs), treble damages of up to three times the monthly rent for certain violations, and attorney fees. Berkeley is among the most plaintiff-friendly jurisdictions in the state for tenant cases.',
    relocationAssistance:
      'Berkeley requires substantial relocation payments for tenants displaced through no-fault evictions. Amounts are set by the Rent Board and adjusted periodically, with enhanced payments for long-term tenants, seniors, and tenants with disabilities.',
    exemptions: [
      'Units built on or after January 1, 1980 (from rent control; other protections may apply via TPA)',
      'Owner-occupied buildings with three or fewer units where the owner lives on-site',
      'Some single-family homes and condominiums with proper notice',
      'Certain student housing and subsidized units',
    ],
    whyStrong:
      'Berkeley\'s consistently low rent caps mean that long-term tenants in covered units are often paying far below current market rate — making the value of their tenancy extremely high and wrongful eviction cases correspondingly valuable. The Rent Board is also active and accessible, providing an additional avenue for tenants to assert rights.',
    tpaInteraction:
      'For Berkeley units built after January 1, 1980, the RSO does not apply. However, if the unit is at least 15 years old, AB 1482 (TPA) may provide statewide just cause and rent cap protections as a baseline.',
    faq: [
      {
        q: 'My landlord wants to move into my unit. Do I have to leave?',
        a: 'Owner move-in is a valid just cause under the Berkeley RSO, but it comes with strict requirements: the owner must genuinely intend to occupy the unit as their primary residence, must provide substantial relocation assistance, and cannot re-rent the unit for a period after you leave. If the owner did not actually move in, you may have a wrongful eviction claim.',
      },
      {
        q: 'My landlord has been raising my rent every year by more than the allowed amount. What can I do?',
        a: 'Any rent increase above the annual allowable amount (set by the Rent Board) is a violation of the Berkeley RSO for covered units. You may be entitled to a refund of excess rent paid, and Bowlay Law can evaluate whether you have a claim.',
      },
      {
        q: 'How long does a Berkeley wrongful eviction case take?',
        a: 'Berkeley wrongful eviction cases follow the same general litigation timeline as other California cases — typically 10–12 months from engagement to settlement, depending on complexity. See our timeline section for a general overview.',
      },
    ],
  },
  {
    slug: 'los-angeles',
    city: 'Los Angeles',
    fullName: 'Los Angeles',
    ordinanceName: 'Los Angeles Rent Stabilization Ordinance (RSO)',
    yearEstablished: '1978',
    heroTagline: 'Strong rent control and just cause protections for LA tenants.',
    overview:
      'Los Angeles has one of the oldest and most established rent stabilization systems in California. The LA Rent Stabilization Ordinance (RSO), administered by the Los Angeles Housing Department (LAHD), covers a large portion of the city\'s rental housing stock and provides meaningful rent control and just cause eviction protections. In recent years, LA has also expanded protections through additional legislation, including the Tenant Anti-Harassment Ordinance and protections for tenants in units not covered by the RSO.',
    coverageDetails: [
      { label: 'Rent cap', value: 'Annual General Adjustment set by LAHD (typically 3–8%)' },
      { label: 'Just cause required', value: 'Yes — for RSO units and expanded to others' },
      { label: 'Relocation assistance', value: 'Yes — substantial, based on tenancy and type' },
      { label: 'Attorney fees', value: 'Yes — available in wrongful eviction actions' },
      { label: 'Treble damages', value: 'Up to 3× actual damages for wrongful eviction' },
    ],
    coveredUnits:
      'The LA RSO covers most residential rental units in buildings with two or more units that were built on or before October 1, 1978. This includes a significant portion of Los Angeles\'s multifamily rental housing. Los Angeles has also enacted broader just cause eviction protections that may apply to tenants in some newer buildings, particularly following pandemic-era tenant protection measures.',
    rentCap:
      'The Los Angeles Housing Department sets an annual General Adjustment for allowable rent increases under the RSO. Increases are tied to the Consumer Price Index and have historically ranged from 3% to 8%. Landlords may petition for additional increases based on specific grounds, including increased operating and maintenance costs.',
    justCause:
      'RSO tenants may only be evicted for valid just causes, which include nonpayment of rent, lease violations, nuisance, illegal activity, owner move-in (including move-in by qualifying family members), Ellis Act withdrawal, substantial renovation, and government orders to vacate. The City of LA has added additional tenant protections over time, and landlords must comply with specific procedural requirements for each just cause.',
    damages:
      'LA wrongful eviction cases can result in treble damages (up to three times actual damages), attorney fees, and punitive damages in egregious cases. The City of LA also has an anti-harassment ordinance that creates additional liability for landlords who harass tenants. Given LA\'s high market rents, the value of a long-term RSO tenancy can be very significant.',
    relocationAssistance:
      'Los Angeles requires substantial relocation assistance for no-fault evictions. Amounts vary based on the type of eviction, the length of tenancy, whether the tenant is in certain protected categories (elderly, disabled, with minor children), and the unit size. For Ellis Act and owner move-in evictions of long-term tenants, relocation payments can reach tens of thousands of dollars.',
    exemptions: [
      'Units built after October 1, 1978 (from RSO rent control; expanded just cause may still apply)',
      'Single-family homes and condominiums (from RSO, subject to TPA)',
      'Hotels, motels, and short-term rentals',
      'Certain owner-occupied buildings with three or fewer units',
      'Government-subsidized housing with equivalent rent restrictions',
    ],
    whyStrong:
      'Los Angeles is one of the most valuable jurisdictions for wrongful eviction cases in the state. The gap between controlled rents and current LA market rates can be enormous, and long-term tenants in pre-1979 buildings often represent some of the highest-value cases Bowlay Law handles. The city\'s large rental population and strong tenant protection framework make it a strong environment for tenant-side litigation.',
    tpaInteraction:
      'For LA units built after October 1, 1978, the RSO does not apply. However, LA\'s expanded just cause protections may cover some post-RSO tenancies, and AB 1482 (TPA) provides additional statewide protections for older units. Determining which laws apply requires analysis of the specific unit and tenancy.',
    faq: [
      {
        q: 'My landlord served me an Ellis Act notice in Los Angeles. What are my rights?',
        a: 'An Ellis Act eviction in LA requires the landlord to withdraw the entire building from the rental market. You are entitled to substantial relocation assistance, a right of first refusal if the units are re-rented within a certain period, and the landlord faces significant restrictions on what they can do with the property. If the Ellis Act eviction was not genuine, you may have a wrongful eviction claim.',
      },
      {
        q: 'Does the LA RSO cover single-family homes?',
        a: 'Generally, no. Single-family homes are typically exempt from the RSO. However, if your single-family home was built more than 15 years ago and you have lived there for more than 12 months, you may be protected by AB 1482 (TPA) for just cause and rent cap purposes.',
      },
      {
        q: 'My landlord raised my rent during the year — is that allowed?',
        a: 'Under the LA RSO, landlords may generally raise rent only once per 12-month period, by no more than the allowable General Adjustment. Multiple increases in a single year, or increases above the allowed amount, may be violations. Bowlay Law can review your situation.',
      },
    ],
  },
  {
    slug: 'san-jose',
    city: 'San Jose',
    fullName: 'San Jose',
    ordinanceName: 'San Jose Apartment Rent Ordinance (ARO) & Tenant Protection Ordinance (TPO)',
    yearEstablished: '1979',
    heroTagline: 'Rent limits for older apartments and day-one just cause protection for most apartment renters.',
    overview:
      'San Jose protects renters through a set of ordinances run by the City Housing Department\'s Rent Stabilization Program. The Apartment Rent Ordinance (ARO), first adopted in 1979, limits rent increases in older apartment buildings to 5% once every 12 months. The Tenant Protection Ordinance (TPO), adopted in 2017, reaches much further: it requires one of 13 listed just causes to end a tenancy in most apartment buildings of three or more units, no matter when the building was built, starting on the first day of the tenancy. A separate Ellis Act Ordinance sets notice, relocation, and right-to-return rules when an owner takes a rent-stabilized building off the rental market.',
    coverageDetails: [
      { label: 'Rent cap (ARO)', value: '5%, once every 12 months, for covered pre-1979 apartments' },
      { label: 'Just cause (TPO)', value: 'Required from day one: 13 listed causes' },
      { label: 'Relocation assistance', value: 'Required for owner move-in, substantial rehab, Ellis Act, and certain other no-fault evictions' },
      { label: 'Attorney fees', value: 'Yes, available under both the ARO and the TPO' },
      { label: 'Treble damages', value: 'For willful TPO violations; refund plus up to 3× rent overcharges under the ARO' },
      { label: 'ARO wrongful eviction', value: 'Up to $10,000 plus moving costs and attorney fees' },
    ],
    coveredUnits:
      'San Jose\'s rent control and just cause rules cover different sets of units, so it matters which one you are asking about.\n\nRent control (ARO): apartments in buildings with three or more units that were approved for occupancy, or offered for rent, on or before September 7, 1979. The City estimates this covers roughly 38,000 apartments.\n\nJust cause (TPO): every rent-stabilized unit, plus rental units in apartment buildings of three or more units built after 1979, guest rooms in guesthouses, and unpermitted units (units the City never approved for living in). A tenant in a 1990s apartment complex may not have local rent control, but still cannot be evicted without one of the 13 just causes.\n\nSingle-family homes, condos, townhomes, and duplexes are generally outside both ordinances unless the unit is unpermitted, but California\'s Tenant Protection Act may still apply.',
    rentCap:
      'For apartments covered by the ARO, a landlord may raise the rent only once in any 12-month period, and by no more than 5% of the rent charged over the prior 12 months. The 5% is a flat limit; it does not change with inflation. A landlord who wants more must win a petition before the City, such as a fair return petition, and approved capital improvement pass-throughs are capped at 3% of the monthly rent. A landlord who has not substantially complied with the City\'s rent registry requirements for the unit may not raise the rent at all. The rent can reset for a new tenant only if the prior tenant left voluntarily or was lawfully evicted for nonpayment, a serious lease violation, or nuisance. If a landlord pushes a tenant out through unlawful conduct, the old rent carries over. Tenants can also petition the Rent Stabilization Program over improper increases, reduced services, or housing code violations.',
    justCause:
      'Under the TPO, a landlord must have one of 13 just causes, state it in a written notice, and send the City a copy of the notice within three days. The causes based on tenant conduct are: nonpayment of rent, a material or habitual lease violation not fixed after written notice, substantial damage to the unit, refusing to sign a substantially identical new lease, nuisance or disorderly conduct, refusing reasonable access after written notice, an unapproved subtenant holding over, and certain serious or violent felony charges against a household member who is not removed from the household. The causes based on landlord decisions are: substantial rehabilitation, Ellis Act withdrawal, owner move-in, a government order to vacate, and ending the use of an unpermitted unit. Adding a child, spouse, domestic partner, or parent to the household (within occupancy limits) can never be treated as a lease violation. Protection begins on the first day of the tenancy.',
    damages:
      'San Jose\'s ordinances give tenants their own right to sue. Under the TPO, a landlord who violates the just cause, notice, or anti-retaliation rules can be liable for actual damages, exemplary (punitive) damages, and attorney fees and costs, and damages are tripled when the violation is willful. Under the ARO, a landlord who wrongfully evicts a tenant from a rent-stabilized unit is liable to the tenant for up to $10,000 plus reasonable costs, including moving costs and attorney fees. A landlord who collects rent above the legal limit must refund the overcharge plus damages of up to three times the overcharge (or up to $500, whichever is greater). Renting a rent-stabilized unit in violation of the implied warranty of habitability, or in material violation of the City\'s housing codes, is also treated as an ARO violation. California law adds its own remedies, including penalties of up to $2,000 per violation for certain harassment aimed at forcing a tenant out.',
    relocationAssistance:
      'Under the TPO, a landlord who ends a tenancy for owner move-in or substantial rehabilitation must pay relocation assistance when the termination notice is delivered. The amount equals the Ellis Act "base assistance" set by the City Council by unit size, and the landlord must also refund the security deposit, less proper deductions. When an owner withdraws a rent-stabilized building under the Ellis Act, tenants receive base assistance plus additional "qualified assistance" if the household is lower-income, or includes someone 62 or older, someone with a disability or a terminal or catastrophic illness, or a child enrolled in K-12 school. Relocation is also required when a tenant must leave because of a government order to vacate or because the unit is unpermitted. The City sets and adjusts the amounts, so confirm current figures with the Rent Stabilization Program.',
    exemptions: [
      'Single-family homes, condos, and townhomes (from both ordinances, unless the unit is unpermitted; state law may still apply)',
      'Duplexes and buildings with only one or two units (from both ordinances, unless the unit is unpermitted)',
      'Apartments first occupied or offered for rent after September 7, 1979 (from ARO rent control only; TPO just cause still applies)',
      'In-law units and accessory dwelling units (from ARO rent control)',
      'Hotels and motels rented to transient guests for less than 30 days',
      'Most government-owned units and units with recorded affordable-rent restrictions',
    ],
    whyStrong:
      'San Jose\'s eviction protections reach far more renters than its rent control does. Because the TPO covers apartment buildings of three or more units regardless of age, and applies from the first day of a tenancy, many tenants in newer complexes have local just cause protection that state law would not give them until they had lived there 12 months. Those protections come with real remedies, including exemplary damages, attorney fees, and treble damages for willful violations. For long-term tenants in older rent-stabilized buildings, the gap between a rent held to 5% increases and current market rent can make the tenancy itself very valuable.',
    tpaInteraction:
      'California\'s Tenant Protection Act (Civil Code sections 1946.2 and 1947.12) fills the gaps around San Jose\'s ordinances. Where the TPO applies, the City\'s just cause rules govern instead of the state\'s, because the state law defers to local just cause ordinances adopted on or before September 1, 2019. Where the ARO applies, the City\'s flat 5% cap governs, because the state cap does not apply to housing under a stricter local rent limit. Apartments in post-1979 buildings of three or more units often get both: TPO just cause protection and, if the building is more than 15 years old, the state rent cap of 5% plus inflation (never more than 10%). Single-family homes, condos, and duplexes fall outside the local ordinances but may be covered by the TPA unless an exemption applies.',
    faq: [
      {
        q: 'Can my San Jose landlord raise my rent more than 5%?',
        a: 'If you live in an apartment building with three or more units that was approved for occupancy by September 7, 1979, generally no. Under the Apartment Rent Ordinance, your landlord can raise the rent only once every 12 months and by no more than 5%, unless the City approves a larger increase through a petition. If your unit is not covered by the ARO, California\'s Tenant Protection Act may still cap increases at 5% plus inflation (never more than 10%) if the building is more than 15 years old and no exemption applies. Some San Jose rentals have no rent cap at all.',
      },
      {
        q: 'Does my San Jose landlord need a reason to evict me?',
        a: 'If you rent in an apartment building of three or more units (of any age), a guesthouse room, or an unpermitted unit, yes. San Jose\'s Tenant Protection Ordinance requires one of 13 just causes, stated in a written notice, and the landlord must send the City a copy within three days. This protection starts on your first day as a tenant. Tenants in single-family homes, condos, and duplexes may instead be protected by California\'s Tenant Protection Act after 12 months.',
      },
      {
        q: 'My San Jose landlord says they are moving into my unit. Do I have to leave?',
        a: 'Not necessarily. Owner move-in is a just cause under the TPO only if an owner with at least a 50% interest intends, in good faith, to live in the unit as a principal residence for at least 36 consecutive months, starting within three months after you leave. A move-in for a family member is allowed only if the unit is in the same building where the owner lives and no other unit there is vacant. The landlord must pay relocation assistance when the notice is delivered. If the owner or relative does not move in within three months or does not stay 36 months, the law presumes bad faith unless the owner proves otherwise, and you may have a claim for damages.',
      },
      {
        q: 'Is it illegal for my San Jose landlord to retaliate against me?',
        a: 'Yes. San Jose\'s ordinances bar landlords from retaliating against tenants who exercise their rights under them, for example by threatening eviction, serving a termination notice, reducing services, raising the rent, or threatening to report a tenant to immigration authorities. Under the TPO, if the landlord acts within six months after you asserted your rights, the law presumes the act was retaliatory, and you can sue for actual and punitive damages. California law separately protects tenants who complain about repair or habitability problems.',
      },
      {
        q: 'Does San Jose rent control cover my house, condo, or duplex?',
        a: 'Generally no. San Jose\'s Apartment Rent Ordinance and Tenant Protection Ordinance apply to buildings with three or more units (and, for just cause, to guesthouses and unpermitted units). Single-family homes, condos, townhomes, and duplexes are usually outside both. California\'s Tenant Protection Act may still give you just cause protection and a cap on rent increases, unless your home is exempt. For example, it may be exempt if it was built within the last 15 years, or if it is not owned by a corporation or REIT and you received the required written exemption notice.',
      },
      {
        q: 'What can I recover if my San Jose landlord wrongfully evicted me?',
        a: 'It depends on your unit and what happened. Under the TPO, tenants can recover actual damages, exemplary damages, and attorney fees, and damages are tripled when the violation is willful. Under the ARO, a landlord who wrongfully evicts a tenant from a rent-stabilized unit is liable for up to $10,000 plus moving costs and attorney fees. California law may add other claims. Bowlay Law can review your situation during a free screening call.',
      },
    ],
  },
  {
    slug: 'antioch',
    city: 'Antioch',
    fullName: 'Antioch',
    ordinanceName: 'Antioch Rent Stabilization and Just Cause for Eviction Ordinance (Measure L)',
    yearEstablished: '2021',
    heroTagline: 'One of the East Bay\'s strongest tenant protection ordinances.',
    overview:
      'Antioch passed Measure L in November 2020, establishing one of the most protective local tenant ordinances in the East Bay. Effective 2021, Antioch\'s Rent Stabilization and Just Cause for Eviction Ordinance provides both rent control and mandatory just cause eviction protections for a significant portion of the city\'s rental housing. Antioch has one of the higher concentrations of long-term renters in Contra Costa County, and Bowlay Law regularly receives calls from Antioch tenants facing unlawful evictions.',
    coverageDetails: [
      { label: 'Rent cap', value: 'Tied to CPI; annual adjustment set by the City' },
      { label: 'Just cause required', value: 'Yes — before any termination of covered tenancy' },
      { label: 'Relocation assistance', value: 'Required for no-fault evictions' },
      { label: 'Attorney fees', value: 'Yes — available in wrongful eviction actions' },
      { label: 'Effective date', value: 'January 2021' },
    ],
    coveredUnits:
      'Antioch\'s ordinance covers residential rental units in multifamily buildings built before the effective date of the ordinance. Single-family homes, condominiums, and certain other property types may be exempt. The ordinance is designed to protect long-term tenants in Antioch\'s substantial stock of older rental housing.',
    rentCap:
      'Annual rent increases for covered units are capped and tied to the Consumer Price Index. Landlords may not increase rent beyond the allowable adjustment without a petition process. The ordinance is designed to keep rents affordable for long-term tenants while allowing for reasonable adjustments.',
    justCause:
      'Covered Antioch tenants may only be evicted for a valid just cause, similar to the framework used by other California cities. Just causes include nonpayment of rent, lease violations, nuisance, criminal activity, owner move-in, substantial renovation, and Ellis Act withdrawal. The ordinance\'s just cause requirements make it significantly harder for landlords to remove long-term tenants without legitimate reason.',
    damages:
      'Antioch tenants who are wrongfully evicted may pursue claims for actual damages, attorney fees, and potentially enhanced damages depending on the circumstances. The ordinance provides meaningful enforcement tools for tenants.',
    relocationAssistance:
      'The Antioch ordinance requires relocation assistance for tenants displaced through no-fault evictions. Amounts are set by the City and vary based on the type of eviction and tenant circumstances.',
    exemptions: [
      'Single-family homes (may be covered by TPA depending on age and notice)',
      'Condominiums and townhomes sold separately with proper notice',
      'Units built on or after the effective date of the ordinance',
      'Duplexes where the owner occupies one of the units (in some circumstances)',
      'Certain subsidized affordable housing units',
    ],
    whyStrong:
      'Antioch is unique in the East Bay: it has strong local protections, a large tenant population that includes many long-term renters with below-market rents, and historically has not been heavily litigated — meaning landlords sometimes move forward with unlawful evictions without expecting pushback. Bowlay Law has experience with Antioch cases and regularly helps Antioch tenants assert their rights.',
    tpaInteraction:
      'For Antioch units not covered by Measure L (e.g., newer units or exempt property types), AB 1482 (TPA) may still apply if the unit is more than 15 years old and otherwise qualifies. In those cases, statewide just cause and rent cap protections provide a baseline.',
    faq: [
      {
        q: 'I live in Antioch and got a notice to vacate. Do I have to leave?',
        a: 'Not necessarily. If your tenancy is covered by Antioch\'s Measure L, your landlord must have a valid just cause to end your tenancy. A notice without a valid legal basis may be unenforceable. Contact Bowlay Law to evaluate your situation — we handle Antioch cases regularly.',
      },
      {
        q: 'Is Antioch\'s ordinance as strong as SF or Oakland?',
        a: 'Antioch\'s ordinance is one of the stronger local ordinances in the East Bay, though SF and Oakland have longer-established frameworks with more case law. The key protections — rent control and just cause — are comparable in principle, and Antioch tenants have real legal remedies when landlords violate the law.',
      },
      {
        q: 'How long has Bowlay Law been handling Antioch cases?',
        a: 'Bowlay Law regularly receives calls from Antioch tenants and has clients in the city. If you are an Antioch tenant facing an eviction or rent increase you believe is unlawful, reach out for a free screening call.',
      },
    ],
  },
];

export function getLocation(slug: string): LocationData | undefined {
  return locations.find((l) => l.slug === slug);
}

export const locationLinks = locations.map(({ slug, city }) => ({
  slug,
  city,
  href: `/locations/${slug}`,
}));
