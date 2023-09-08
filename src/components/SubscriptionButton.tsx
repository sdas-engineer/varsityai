"use client";
import React from "react";
import { Zap } from "lucide-react";
import { Button } from "./ui/button";
import axios from "axios";

type Props = { isPro: boolean };

const SubscriptionButton = (props: Props) => {
  const [loading, setLoading] = React.useState(false);
  const handleSubscription = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");
      window.location.href = response.data.url;
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
      <Button variant={"premium"} disabled={loading} onClick={handleSubscription}>
        {props.isPro ? "Manage Subscriptions" : "Upgrade Pro"}
        {<Zap className="w-4 h-4 ml-2 fill-white" />}
      </Button>
  );
};

export default SubscriptionButton;
