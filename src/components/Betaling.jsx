import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const Betaling = () => {
  return (
    <div className="bg-white xs:w-550 sm:w-700 h-500 rounded-12 xs:pl-2 sm:pl-20 pt-10 xs:ml-2 sm:ml-20 mt-20">
      <h2 className="text-4xl text-darkblue pb-10">Card information</h2>
      <p>Cardnumber</p>
      <InputOTP maxLength={16}>
        <InputOTPGroup className=" w-100">
          <InputOTPSlot className="h-25" index={0} />
          <InputOTPSlot className="h-25" index={1} />
          <InputOTPSlot className="h-25" index={2} />
          <InputOTPSlot className="h-25" index={3} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup className=" w-100">
          <InputOTPSlot className="h-25" index={4} />
          <InputOTPSlot className="h-25" index={5} />
          <InputOTPSlot className="h-25" index={6} />
          <InputOTPSlot className="h-25" index={7} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup className=" w-100">
          <InputOTPSlot className="h-25" index={8} />
          <InputOTPSlot className="h-25" index={9} />
          <InputOTPSlot className="h-25" index={10} />
          <InputOTPSlot className="h-25" index={11} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup className=" w-100">
          <InputOTPSlot className="h-25" index={12} />
          <InputOTPSlot className="h-25" index={13} />
          <InputOTPSlot className="h-25" index={14} />
          <InputOTPSlot className="h-25" index={15} />
        </InputOTPGroup>
      </InputOTP>
      <div className="grid grid-cols-2">
        <div>
          <p className="pt-5">Date</p>
          <InputOTP maxLength={4}>
            <InputOTPGroup className=" w-50">
              <InputOTPSlot className="h-25" index={0} />
              <InputOTPSlot className="h-25" index={1} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup className=" w-50">
              <InputOTPSlot className="h-25" index={2} />
              <InputOTPSlot className="h-25" index={3} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <div>
          <label>
            <p className="pt-5">CVV</p>
            <input className="bg-blue" type="text" maxLength={3}/>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Betaling;
