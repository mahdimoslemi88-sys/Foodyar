import React from 'react';
import { Coffee, Pizza, Utensils } from 'lucide-react';

export const getItemIcon = (cat: string) => {
    if (cat.includes('نوشیدنی') || cat.includes('قهوه')) return <Coffee className="w-6 h-6" />;
    if (cat.includes('پیتزا') || cat.includes('فست')) return <Pizza className="w-6 h-6" />;
    return <Utensils className="w-6 h-6" />;
};
