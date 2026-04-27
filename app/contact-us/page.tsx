export default function ContactPage() {
  return (
    <div className="bg-white text-black px-6 py-10">
      <div className="max-w-5xl mx-auto space-y-6">

        <h1 className="text-3xl font-bold">Contact Us</h1>

        <p>
          Contact Us
        </p>

        <p>
          For any kind of queries related to products, orders or services feel free to contact us on our official email address or phone number as given below :
        </p>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Delivery Timings :</h2>

          <p>8:00 AM To 10:30 AM</p>
          <p>10:30 AM To 12:30 PM</p>
          <p>4:00 PM To 7:00 PM</p>
        </div>

        <p className="font-medium">
          Note : You can order for maximum 2days in advance. i.e., Today & Tomorrow only.
        </p>

      </div>
    </div>
  );
}