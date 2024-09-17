'use client';

import { useState, ChangeEvent } from "react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function TipCalculator() {
    const [billAmount, setBillAmount] = useState<number | null>(null);
    const [tipPercentage, setTipPercentage] = useState<number | null>(null);
    const [tipAmount, setTipAmount] = useState<number>(0);
    const [totalAmount, setTotalAmount] = useState<number>(0);

    const handleBillAmountChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setBillAmount(parseFloat(e.target.value));
    };

    const handleTipPercentageChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setTipPercentage(parseFloat(e.target.value));
    };

    const calculateTip = (): void => {
        if (billAmount !== null && tipPercentage !== null) {
            const tip = billAmount * (tipPercentage / 100);
            setTipAmount(tip);
            setTotalAmount(billAmount + tip);
        }
    };

    const resetCalculator = (): void => {
        setBillAmount(null);
        setTipPercentage(null);
        setTipAmount(0);
        setTotalAmount(0);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen dark:bg-gray-900 bg-gradient-to-br from-red-900 to-black">
            <Card className="w-full max-w-md p-6 bg-white dark:bg-gray-800 shadow-2xl rounded-3xl">
                <CardHeader>
                    <CardTitle>Tip Calculator</CardTitle>
                    <CardDescription>
                        Enter the bill amount and tip percentage to calculate the tip and total.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid gap-2">
                    <Label htmlFor="bill-amount">Bill Amount</Label>
                    <Input
                    className="border-2 border-gray-300 hover:border-gray-500 rounded-3xl"
                    id="bill-amount"
                    type="number"
                    placeholder="Enter bill amount"
                    value={billAmount !== null ? billAmount : ''}
                    onChange={handleBillAmountChange}
                    />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="tip-percentage">Tip Percentage</Label>
                        <Input
                        className="border-2 border-gray-300 hover:border-gray-500 rounded-3xl"
                        id="tip-percentage"
                        type="number"
                        placeholder="Enter tip percentage"
                        value={tipPercentage !== null ? tipPercentage : ''}
                        onChange={handleTipPercentageChange}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                    <Button className="rounded-3xl bg-red-700 w-24 hover:bg-red-600 active:bg-red-800" 
                    onClick={calculateTip}>
                        Calculate
                    </Button>
                    <Button className="rounded-3xl bg-red-700 w-24 hover:bg-red-600 active:bg-red-800"
                    onClick={resetCalculator}
                    >Reset
                    </Button>
                    </div>
                </CardContent>
                <CardFooter className="grid gap-2">
                    <div className="flex items-center justify-between">
                        <span>Tip Amount:</span>
                        <span className="font-bold">${tipAmount.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span>Total Amount:</span>
                        <span className="font-bold">${totalAmount.toFixed(2)}</span>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}