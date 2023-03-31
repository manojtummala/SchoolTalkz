import { LabelsLogo, RecentLogo, TrendingLogo } from "@/asset/images";
import { useState } from 'react';
import { SVGProp } from "@/types/ui";

const Recent = () => {

    return (
        <div>
            <RecentLogo mode="light"/>
        
        <div>
            <TrendingLogo mode="light"/>
        </div>
            <LabelsLogo mode="light"/>
        </div>
      );
    };

export default Recent;
