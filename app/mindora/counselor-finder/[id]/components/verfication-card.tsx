
import { FiCheck, FiBookOpen } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const VerificationCard = () => {
  return (
    <div className="space-y-5">
      <div className="flex gap-3">
        <div
          className="
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-xl
            bg-mood-good-bg
            text-mood-good
          "
        >
          <FiCheck className="h-4 w-4" />
        </div>

        <div>
          <h4 className="text-sm font-semibold text-text-primary">
            Verified License
          </h4>

          <p className="mt-1 text-xs text-text-muted">12345-CA</p>
        </div>
      </div>

      <div className="flex gap-3">
        <div
          className="
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-xl
            bg-surface-soft
            text-brand-primary
          "
        >
          <FiBookOpen className="h-4 w-4" />
        </div>

        <div>
          <h4 className="text-sm font-semibold text-text-primary">
            Education
          </h4>

          <p className="mt-1 text-xs text-text-muted">
            M.A. Clinical Psychology
          </p>
        </div>
      </div>

      <div className="flex gap-3">
        <div
          className="
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-xl
            bg-surface-soft
            text-brand-primary
          "
        >
          <FaWhatsapp className="h-4 w-4" />
        </div>

        <div>
          <h4 className="text-sm font-semibold text-text-primary">
            WhatsApp
          </h4>

          <p className="mt-1 text-xs text-text-muted">+1 (555) 123-4567</p>
        </div>
      </div>
    </div>
  );
};

export default VerificationCard;