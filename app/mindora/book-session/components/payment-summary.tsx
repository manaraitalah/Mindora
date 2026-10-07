type PaymentSummaryProps = {
  sessionFee: number;
  coverage: number;
};

export function PaymentSummary({ sessionFee, coverage }: PaymentSummaryProps) {
  const total = Math.max(0, sessionFee - coverage);

  return (
    <div className="mt-6 border-t border-border-subtle pt-5">
      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-text-secondary">Session fee</span>

          <span className="font-medium text-text-primary">
            ${sessionFee.toFixed(2)}
          </span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-text-secondary">Insurance coverage</span>

          <span className="font-medium text-brand-primary">
            -${coverage.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="my-4 h-px bg-border-subtle" />

      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-text-primary">
          Your total
        </span>

        <span className="text-sm font-semibold text-text-primary">
          ${total.toFixed(2)}
        </span>
      </div>
    </div>
  );
}
