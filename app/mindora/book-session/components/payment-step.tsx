import Button from "@/components/ui/buttons/primary-button";
import { BookingForm } from "../page";
import { PaymentOption } from "./payment-option";
import { PaymentSummary } from "./payment-summary";

type PaymentStepProps = {
  booking: BookingForm;
  updateBooking: (data: Partial<BookingForm>) => void;
  onBack: () => void;
  onContinue: () => void;
};

export function PaymentStep({
  booking,
  updateBooking,
  onBack,
  onContinue,
}: PaymentStepProps) {
  const paymentMethodId = booking.paymentMethodId;

  const sessionFee = 180;
  const coverage = paymentMethodId === "insurance" ? 160 : 0;

  const handlePaymentSelect = (id: string) => {
    updateBooking({
      paymentMethodId: id,
    });
  };

  return (
    <section className="flex justify-center p-4">
      <div
        className="
          flex
          min-h-[560px]
          w-full
          flex-col
          rounded-[22px]
          bg-background
          p-5
        "
      >
        <div>
          <h1 className="text-[18px] font-semibold text-text-primary">
            Payment or coverage
          </h1>

          <p className="mt-1.5 text-sm text-text-secondary">
            How would you like to pay?
          </p>
        </div>

        <div className="mt-5 space-y-3">
          <PaymentOption
            type="insurance"
            title="Insurance (Aetna)"
            subtitle="$20 copay"
            badge="Covered"
            selected={paymentMethodId === "insurance"}
            onClick={() => handlePaymentSelect("insurance")}
          />

          <PaymentOption
            type="card"
            title="Card ending in 4242"
            subtitle="Expires 03/29"
            selected={paymentMethodId === "card"}
            onClick={() => handlePaymentSelect("card")}
          />

          <PaymentOption
            type="add"
            title="Add new payment method"
            onClick={() => {
              console.log("Open add payment method");
            }}
          />
        </div>

        <PaymentSummary sessionFee={sessionFee} coverage={coverage} />

        <div className="mt-5 rounded-xl bg-surface-muted p-4">
          <p className="text-xs leading-5 text-text-secondary">
            You won't be charged until the booking is confirmed.
          </p>
        </div>

        <div className="mt-auto grid grid-cols-2 gap-3 pt-5">
          <Button
            type="button"
            variant="outline"
            onClick={onBack}
            className="h-11"
          >
            Back
          </Button>

          <Button
            type="button"
            variant="primary"
            onClick={onContinue}
            disabled={!paymentMethodId}
            className="h-11"
          >
            Continue
          </Button>
        </div>
      </div>
    </section>
  );
}
