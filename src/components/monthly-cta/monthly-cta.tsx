import React from "react"
import Columns from "../columns";
import Button from "../../design-system/button/button";
import MonthlySubscriptionImg from '../../content/images/monthly-subscription/monthly-subcription-cover.jpg';

const MonthlyCTA: React.FC = () => {

  return (
    <>
    {/* Membership CTA */ }
    <section className = "container-black px-5 pt-12 lg:pt-28" >
      <Columns columns="2" gap="16">
        <div>
          <img className="object-cover rounded-2xl w-full max-h-[700px]" height={2000} width={3000} src={MonthlySubscriptionImg} alt="Concon Dunes" loading="eager" />
        </div>
        <div className="text-left flex flex-col justify-center">
          <h2 className="mb-4">Elevate your edits every month.</h2>
          <p className="mb-4 text-xl">Get fresh, professionally crafted Lightroom presets delivered monthly to keep your photo style evolving. Perfect for photographers and creators who love staying inspired.</p>
          <div>
            <Button
              text="Subscribe now"
              color="dark"
              link="https://thedarkroomm.gumroad.com/l/monthly-lightroom-presets"
              target="_blank"
              onClick={() => sa_event("buy_monthly_subscription")}
            />
          </div>
        </div>
      </Columns>
      </section>
    </>
  );
}

export default MonthlyCTA
