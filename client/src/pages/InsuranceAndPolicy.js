import Demo from "../components/Demo";

const InsuranceAndPolicy = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[2rem] px-[0rem] pb-[0rem] box-border gap-[3.125rem] leading-[normal] tracking-[normal] mq750:gap-[1.563rem]">
      <main className="self-stretch flex flex-col items-start justify-start gap-[4rem] max-w-full mq450:gap-[1rem] mq750:gap-[2rem]">
        <header className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-left text-[1.638rem] text-gray-2200 font-inter">
          <div className="w-[72.5rem] flex flex-row items-start justify-between gap-[1.25rem] max-w-full">
            <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
              <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[5.188rem] whitespace-nowrap">
                Drivee
              </a>
            </div>
            <div className="w-[22.188rem] flex flex-col items-start justify-start pt-[0.406rem] px-[0rem] pb-[0rem] box-border max-w-full">
              <div className="w-[19.188rem] flex flex-row items-center justify-start mq450:gap-[1rem]">
                <div className="flex-1 flex flex-row items-center justify-start mq450:gap-[1rem]">
                  <div className="flex-1 flex flex-row items-center justify-start mq450:gap-[1rem]">
                    <div className="flex-1 flex flex-row items-center justify-start mq450:gap-[1rem]">
                      <div className="flex-1 flex flex-row items-center justify-start mq450:gap-[1rem]">
                        <nav className="m-0 flex-1 flex flex-row items-center justify-start gap-[1.968rem] text-left text-[1.063rem] text-gray-2200 font-inter mq450:gap-[1rem] mq750:hidden">
                          <div className="flex flex-row items-center justify-center gap-[0.25rem]">
                            <div className="flex flex-row items-center justify-start">
                              <a className="[text-decoration:none] relative capitalize font-medium text-[inherit] inline-block min-w-[4rem]">
                                hosting
                              </a>
                            </div>
                            <img
                              className="h-[0.188rem] w-[0.375rem] relative"
                              loading="lazy"
                              alt=""
                              src="/vector.svg"
                            />
                          </div>
                          <a className="[text-decoration:none] relative capitalize font-medium text-[inherit] inline-block min-w-[5.75rem] whitespace-nowrap">
                            Contact us
                          </a>
                          <div className="flex flex-row items-center justify-center gap-[0.25rem]">
                            <div className="flex flex-row items-center justify-start">
                              <a className="[text-decoration:none] relative capitalize font-medium text-[inherit] inline-block min-w-[4.25rem]">
                                account
                              </a>
                            </div>
                            <img
                              className="h-[0.188rem] w-[0.375rem] relative"
                              loading="lazy"
                              alt=""
                              src="/vector.svg"
                            />
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="h-[2.125rem] w-[2.125rem] relative rounded-[50%] object-cover min-h-[2.125rem]"
              loading="lazy"
              alt=""
              src="/ellipse-11@2x.png"
            />
          </div>
        </header>
        <section className="self-stretch flex flex-col items-end justify-start gap-[4.25rem] max-w-full text-left text-[3.375rem] text-white font-inter mq450:gap-[1.063rem] mq750:gap-[2.125rem]">
          <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
            <img
              className="h-[16.375rem] flex-1 relative max-w-full overflow-hidden object-cover"
              loading="lazy"
              alt=""
              src="/rectangle-825@2x.png"
            />
            <h2 className="!m-[0] absolute right-[30rem] bottom-[6.125rem] text-inherit capitalize font-semibold font-inherit z-[1] mq1050:text-[2.688rem] mq450:text-[2rem]">{`insurance & policy`}</h2>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[1.5rem] box-border max-w-full text-[1.75rem] text-gray-1600">
            <div className="w-[72.75rem] flex flex-col items-start justify-start gap-[3.75rem] max-w-full lg:gap-[1.875rem]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem] max-w-full">
                <div className="relative capitalize font-semibold inline-block max-w-full mq450:text-[1.375rem]">
                  Insurance, Damage Fees, and Additional Terms
                </div>
                <div className="self-stretch h-[8.688rem] relative text-[1rem] leading-[250%] capitalize text-darkslategray-200 inline-block shrink-0">
                  <p className="m-0">
                    DISCLAIMER: This is a summary of Getaround, Inc's platform
                    insurance policy. The statements contained herein are
                    provided for quick reference.
                  </p>
                  <p className="m-0">
                    The liability insurance described in this summary is
                    provided by Assurant except as described in the section
                    titled “Commercial Hosts”, below.
                  </p>
                  <p className="m-0">
                    For Commercial Hosts listing their cars in the state of New
                    York, please see the section titled Commercial Hosts, below.
                  </p>
                  <p className="m-0">
                    Getaround's insurance policy does not cover incidents that
                    take place when vehicles listed on the platform are not in
                    an active trip.
                  </p>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[23.875rem] gap-[1.25rem] mq1050:pb-[15.5rem] mq1050:box-border mq450:pb-[10.063rem] mq450:box-border">
                <div className="relative capitalize font-semibold shrink-0 mq450:text-[1.375rem]">
                  Coverage limits
                </div>
                <div className="self-stretch h-[24.125rem] relative text-[1rem] leading-[250%] capitalize text-darkslategray-200 inline-block shrink-0">
                  <a
                    className="text-[inherit]"
                    href="https://www.getaround.com/terms/eligibility-requirements"
                    target="_blank"
                  >
                    Eligibility Requirements
                  </a>
                  <a
                    className="text-[inherit]"
                    href="https://www.getaround.com/terms/fee-and-commission-schedule"
                    target="_blank"
                  >
                    Fee and Commission Schedule
                  </a>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem]">
                <div className="relative capitalize font-semibold mq450:text-[1.375rem]">
                  Liability Coverage
                </div>
                <div className="self-stretch h-[11rem] relative text-[1rem] leading-[250%] capitalize text-darkslategray-200 inline-block shrink-0">
                  Guests are covered in our insurance policy up to the minimum
                  limits required by the automobile financial responsibility law
                  of the jurisdiction in which the accident occurs, or the
                  amounts specified by the statute regarding peer-to-peer car
                  sharing (if any) applicable to the jurisdiction in which the
                  accident occurs, whichever is greater. Hosts are covered up to
                  a combined single limit of $1,000,000 for liability, except
                  where required otherwise by applicable law. Coverage includes
                  personal liability for the Guest, third-party liability for
                  passengers and other affected parties, and third-party
                  property damage arising from a car accident.
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[4.187rem] relative gap-[1.25rem]">
                <div className="relative capitalize font-semibold mq450:text-[1.375rem]">
                  Comprehensive and Collision Coverage
                </div>
                <div className="h-[4.313rem] w-full absolute !m-[0] bottom-[-1.375rem] left-[0rem] text-[1rem] leading-[250%] capitalize text-darkslategray-200 inline-block">
                  The comprehensive and collision coverage provided protects the
                  Host's vehicle in the event of an accident. This covers for
                  theft, fire, vandalism, weather damage, and any damage to the
                  vehicle in the event of an accident up to the actual cash
                  value of the vehicle.
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[6.437rem] box-border gap-[1.25rem] max-w-full">
                <div className="relative capitalize font-semibold inline-block shrink-0 max-w-full mq450:text-[1.375rem]">
                  Uninsured and Underinsured (UI/UM) Coverage
                </div>
                <div className="self-stretch h-[5.813rem] relative text-[1rem] leading-[250%] capitalize text-darkslategray-200 inline-block shrink-0">
                  UI/UM coverage is provided in states where such coverage is
                  required by law, in accordance with the minimum limits
                  established by such states. In addition, or in certain states
                  in lieu of UI/UM coverage, personal injury protection and/or
                  medical payment coverage is provided up to the limits required
                  by state law.
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem] max-w-full">
                <div className="relative capitalize font-semibold inline-block max-w-full mq450:text-[1.375rem]">
                  Personal Injury Protection (PIP)
                </div>
                <div className="self-stretch h-[3.375rem] relative text-[1rem] leading-[250%] capitalize text-darkslategray-200 inline-block shrink-0">
                  As mandated by law, PIP coverage is provided in states where
                  such coverage is required by law, in accordance with the
                  minimum limits established by such states.
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[4.062rem] box-border gap-[1.25rem] max-w-full">
                <div className="relative capitalize font-semibold inline-block shrink-0 max-w-full mq450:text-[1.375rem]">
                  Medical Payments Coverage
                </div>
                <div className="self-stretch h-[3.438rem] relative text-[1rem] leading-[250%] capitalize text-darkslategray-200 inline-block shrink-0">
                  Coverage for medical payments arising from a car accident up
                  to a maximum limit of $1,000 is included. This is a supplement
                  to personal health insurance only and it is recommended that
                  all Guests maintain adequate personal health insurance
                  coverage.
                </div>
              </div>
              <div className="w-[70.625rem] flex flex-col items-start justify-start gap-[1.25rem] max-w-full">
                <div className="relative capitalize font-semibold inline-block max-w-full mq450:text-[1.375rem]">
                  Damage Fee and Protection Plan
                </div>
                <div className="self-stretch h-[139.375rem] relative text-[0.875rem] leading-[250%] capitalize text-darkslategray-200 inline-block shrink-0">
                  <p className="[margin-block-start:0] [margin-block-end:10.5px]">
                    In the event of any loss or damage to the car, or any
                    personal property or bodily injury claim, or any roadside
                    assistance expense that occurs during the Reservation period
                    due to any cause regardless of fault, including, but not
                    limited to, collision, rollover, theft, vandalism, seizure,
                    fire, flood, hail or other acts of nature or God, the Guest
                    is held responsible, and is required to pay Getaround a fee
                    (the “Damage Fee”) of up to $3000. In the event a Guest has
                    violated Getaround's Terms of Service, the limits offered by
                    the Damage Fee do not apply, and the Guest may be held
                    responsible for the full amount of any claim.‍On a per-trip
                    basis, eligible Guests may purchase an optional Protection
                    Plan that may reduce the Guest's responsibility for the
                    above-referenced Damage Fee in the event that physical
                    damage, roadside assistance, or other loss occurs during the
                    trip for which the Protection Plan was purchased. A
                    Protection Plan is purchased on a per trip basis and applies
                    only to the trip for which it was purchased. The Protection
                    Plan options are shown in the Getaround app at the time of
                    purchase. Protection Plans may provide benefits similar to a
                    Guest’s personal insurance policy. Protection Plans are
                    secondary to any source of primary insurance the Guest may
                    have, and are subject to the “Coverage Limits” section
                    above. Protection Plans are not policies of insurance but
                    reduce the Guest's responsibility for the Damage Fee and the
                    full amount of a claim for damage to the car, subject to the
                    terms below.
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:10.5px]">
                    Before purchasing a Protection Plan, Guests should check
                    their personal auto insurance or credit card policies to see
                    if those policies offer coverage that would apply in the
                    case of physical damage to the car. If a Protection Plan is
                    purchased for a trip, a prorated portion of that Protection
                    Plan will be charged for, and applied to, any extensions for
                    that trip. If a Protection Plan has not been purchased for a
                    trip, no Protection Plan may be applied to any extensions
                    for that trip or otherwise applied retroactively to the
                    trip.
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:10.5px]">
                    The cost of the Protection Plan depends upon the duration of
                    the trip or extension, the plan selected, the type and
                    location of the car, driving experience, and similar
                    factors. Protection Plans are not available for all Guests,
                    cars, or trips, and they may be purchased only in select
                    states. Protection Plans are not insurance and are not
                    mandatory. There is no obligation for Guests to purchase a
                    Protection Plan, or for Getaround to offer a Protection
                    Plan. The purchase of a Protection Plan is optional and may
                    be declined.
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:10.5px]">
                    {`The reduction of responsibility offered by a Protection Plan will not apply if any of the following circumstances are present: (1) Damage or loss results from the Guest's (A) intentional, willful, wanton, or reckless conduct, (B) operation of the car under the influence of drugs or alcohol, (C) towing or pushing anything, or (D) operation of the car on an unpaved road if the damage or loss is a direct result of the road or driving conditions; (2) Damage or loss occurs while the car is (A) used for commercial hire (except if such use occurs during a Drive With Uber Trip or Drive With Uber Weekly Trip, as those terms are defined in our `}
                    <a
                      className="text-[inherit]"
                      href="http://getaround.com/terms"
                      target="_blank"
                    >
                      <span className="[text-decoration:underline]">
                        Terms of Service
                      </span>
                    </a>
                    , (B) used in connection with conduct that could be properly
                    charged as a felony, (C) involved in a speed test or contest
                    or in driver training activity, (D) operated by a person
                    other than the Guest who reserved the car, or (E) operated
                    outside the United States; (3) The Guest has provided false
                    or fraudulent information to Getaround, and Getaround would
                    not have facilitated the Reservation period for the Guest if
                    it had instead received true information; (4) The Guest has
                    violated any terms of this Agreement; (5) The Guest fails to
                    close and lock all windows, doors and trunk, and the car is
                    stolen, damaged, or vandalized; (6) The Guest fails to
                    notify Getaround immediately after an incident or loss; or
                    (7) The Guest fails to pay any other amount due under this
                    Agreement.
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:10.5px]">
                    For Guests whose trips start in the state of Colorado,
                    please read the following notice carefully:
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:10.5px]">
                    NOTICE: THIS CONTRACT OFFERS, FOR AN ADDITIONAL CHARGE, A
                    COLLISION DAMAGE WAIVER TO COVER YOUR RESPONSIBILITY FOR
                    DAMAGE TO THE VEHICLE. YOU ARE ADVISED NOT TO SIGN THIS
                    WAIVER IF YOU HAVE RENTAL VEHICLE COLLISION COVERAGE
                    PROVIDED BY CERTAIN GOLD OR PLATINUM CREDIT CARDS OR
                    COLLISION INSURANCE ON YOUR OWN VEHICLE. BEFORE DECIDING
                    WHETHER TO PURCHASE THE COLLISION DAMAGE WAIVER, YOU MAY
                    WISH TO DETERMINE WHETHER YOUR OWN VEHICLE INSURANCE AFFORDS
                    YOU COVERAGE FOR DAMAGE TO THE RENTAL VEHICLE AND THE AMOUNT
                    OF THE DEDUCTIBLE UNDER YOUR OWN INSURANCE COVERAGE. THE
                    PURCHASE OF THIS COLLISION DAMAGE WAIVER IS NOT MANDATORY
                    AND MAY BE WAIVED.
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:10.5px]">
                    For Guests whose trips start in the state of Illinois,
                    please read the following notice carefully:
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:10.5px]">
                    NOTICE: THIS CONTRACT OFFERS, FOR AN ADDITIONAL CHARGE, A
                    COLLISION DAMAGE WAIVER TO COVER YOUR FINANCIAL
                    RESPONSIBILITY FOR DAMAGE TO THE RENTAL VEHICLE. THE
                    PURCHASE OF A COLLISION DAMAGE WAIVER IS OPTIONAL AND MAY BE
                    DECLINED. YOU ARE ADVISED TO CAREFULLY CONSIDER WHETHER TO
                    SIGN THIS WAIVER IF YOU HAVE RENTAL VEHICLE COLLISION
                    COVERAGE PROVIDED BY YOUR CREDIT CARD OR COLLISION INSURANCE
                    ON YOUR OWN VEHICLE. BEFORE DECIDING WHETHER TO PURCHASE THE
                    COLLISION DAMAGE WAIVER, YOU MAY WISH TO DETERMINE WHETHER
                    YOUR OWN VEHICLE INSURANCE AFFORDS YOU COVERAGE FOR DAMAGE
                    TO THE RENTAL VEHICLE AND THE AMOUNT OF DEDUCTIBLE UNDER
                    YOUR OWN INSURANCE COVERAGE.
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:10.5px]">
                    For Guests whose trips start in the state of Texas, please
                    read the following notice carefully:
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:10.5px]">
                    NOTICE: YOUR RENTAL AGREEMENT OFFERS, FOR AN ADDITIONAL
                    CHARGE, AN OPTIONAL WAIVER TO COVER ALL OR A PART OF YOUR
                    RESPONSIBILITY FOR DAMAGE TO OR LOSS OF THE VEHICLE. BEFORE
                    DECIDING WHETHER TO PURCHASE THE WAIVER, YOU MAY WISH TO
                    DETERMINE WHETHER YOUR OWN AUTOMOBILE INSURANCE OR CREDIT
                    CARD AGREEMENT PROVIDES YOU COVERAGE FOR RENTAL VEHICLE
                    DAMAGE OR LOSS AND DETERMINE THE AMOUNT OF THE DEDUCTIBLE
                    UNDER YOUR OWN INSURANCE COVERAGE. THE PURCHASE OF THE
                    WAIVER IS NOT MANDATORY. THE WAIVER IS NOT INSURANCE.
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:10.5px]">
                    For Guests whose trips start in the state of Wisconsin,
                    please read the following notice carefully:
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:10.5px]">
                    NOTICE ABOUT LIABILITY FOR DAMAGE TO THE RENTAL CAR
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:10.5px]">
                    The State of Wisconsin requires us to provide the following
                    information about your liability for damage to a rental car
                    and the purchase of a damage waiver.
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:10.5px]">
                    LIABILITY FOR DAMAGE TO THE RENTAL CAR
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:10.5px]">
                    The rental agreement makes you and any authorized driver
                    liable for any damage to the rental car caused by an
                    accident, or by intentional, reckless or wanton misconduct,
                    or by theft that you may have intentionally caused. Total
                    liability for any damage is limited to:
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:10.5px]">
                    1) reasonable repair costs, less discounts available to us,
                    or the fair market value of the car, whichever is less,
                    and2) actual and reasonable towing costs, and for storage
                    costs during the period before you notify the rental company
                    of the damage to the vehicle or for 14 days after the damage
                    occurs, whichever period is shorter.
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:10.5px]">
                    LIABILITY FOR DAMAGE AFTER THE RENTAL CAR HAS BEEN STOLEN
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:10.5px]">
                    If a person who drives the rental car without your
                    authorization causes damage to the car, you may be liable
                    for the damage as though you or an authorized person was
                    driving the car unless you do all of the following:
                  </p>
                  <p className="m-0">
                    1) Refrain from leaving the ignition key in the car when you
                    are not in the car.2) Always keep the ignition key in your
                    possession.3) Immediately report to the local police if you
                    learn the car has been stolen, or that an unauthorized
                    person is driving the car.4) Cooperate fully with the local
                    police by providing any information you know that may be
                    helpful.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Demo propPadding="4.75rem 7.687rem 2.875rem" />
    </div>
  );
};

export default InsuranceAndPolicy;
