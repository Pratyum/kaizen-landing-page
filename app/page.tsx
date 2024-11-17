import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram, ChevronRight, Phone, Mail } from "lucide-react";

export default function KaizenIsshinryuLanding() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-red-700 text-white">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="/kaizen-logo.png?height=32&width=32"
            width={32}
            height={32}
            alt="Kaizen Isshinryu Logo"
            className="rounded-full"
          />
          <span className="ml-2 text-lg font-bold">Kaizen Isshinryu</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#about"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#classes"
          >
            Classes
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#locations"
          >
            Locations
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#contact"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48"
          style={{
            background:
              "url('/hero-section.jpeg') no-repeat center center / cover",
          }}
        >
          <div className="z-1 container px-4 md:px-6">
            <div className="p-6 rounded-2xl flex flex-col items-center space-y-4 text-center bg-white/40">
              <div className="space-y-2">
                <h1 className="text-red-700 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  Forge Your Spirit with Kaizen Isshinryu
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-2xl/relaxed">
                  Embark on a journey of continuous improvement through the
                  ancient art of Isshinryu Karate.
                </p>
              </div>
              <div className="space-x-4">
                <Button
                  size="lg"
                  className="bg-red-600 text-white hover:bg-red-700"
                >
                  Start Your Journey
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white hover:bg-white hover:text-black"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 flex flex-col"
        >
          <div className="flex-1 container px-4 md:px-6 flex flex-col items-stretch">
            <div className="self-center flex gap-4 items-center">
              <Image
                src="/kaizen-logo.png?height=150&width=300"
                width={150}
                height={75}
                alt="Isshinryu Karate Demonstration"
                className="rounded-lg object-cover"
              />
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                About Kaizen Isshinryu
              </h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <p className="text-gray-700 md:text-lg/relaxed lg:text-xl/relaxed">
                  Isshinryu Karate, founded by Tatsuo Shimabuku in 1954, is a
                  powerful and efficient Okinawan martial art. It emphasizes
                  close-range combat, quick strikes, and practical self-defense
                  techniques.
                </p>
                <p className="text-gray-700 md:text-lg/relaxed lg:text-xl/relaxed">
                  At Kaizen Isshinryu, we blend traditional teachings with
                  modern training methods, fostering a spirit of continuous
                  improvement in our students.
                </p>
              </div>
              <Image
                src="/kick.png?height=400&width=400"
                width={400}
                height={400}
                alt="Isshinryu Karate Demonstration"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Meet Our Founder
            </h2>
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <Image
                src="/founder.png?height=400&width=400"
                width={400}
                height={400}
                alt="Founder of Kaizen Isshinryu"
                className="rounded-full mx-auto lg:mx-0"
              />
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Sensei Haranadh</h3>
                <p className="text-gray-700 md:text-lg/relaxed">
                  With over 30 years of experience in Isshinryu Karate, Sensei
                  Haranadh founded Kaizen Isshinryu with a vision to spread the
                  arts philosophy of continuous improvement.
                </p>
                <p className="text-gray-700 md:text-lg/relaxed">
                  His dedication to the craft and his students has made Kaizen
                  Isshinryu a beacon of excellence in martial arts training.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="locations" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Our Locations
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Link href={"https://maps.app.goo.gl/GWvxspAZAop73guu9"}>
                <Card>
                  <CardHeader>
                    <CardTitle>Mahalakshmi Flats</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      77, S Sivan Koil St, Ottagapalayam, Sector 15, Vadapalani,
                      Chennai, Tamil Nadu 600026
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href={"https://maps.app.goo.gl/v1stfPcr4zW9Mqgj8"}>
                <Card>
                  <CardHeader>
                    <CardTitle>Natesan Nagar</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      220, Natesan Nagar, near Natesan Park & Shiva Vishnu
                      Temple, Elango Nagar Extension, Natesan Nagar,
                      Virugambakkam, Chennai, Tamil Nadu 600092
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href={"https://maps.app.goo.gl/u9xXvji35gBdpBQr8"}>
                <Card>
                  <CardHeader>
                    <CardTitle>MAK School Campus</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      B-77,A, 36th St, Ponnambalam Colony, Sector 7, K. K.
                      Nagar, Chennai, Tamil Nadu 600078
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href={"https://maps.app.goo.gl/Ua5eysUBoEymoktaA"}>
                <Card>
                  <CardHeader>
                    <CardTitle>MAK School Campus - Jafferkhanpet</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      26H3+9R6, Periyar St, Thirunagar, West Jafferkhanpet,
                      Chennai, Tamil Nadu 600083
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Start Your Kaizen Journey Today
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl/relaxed">
                  Join Kaizen Isshinryu and experience the transformative power
                  of Isshinryu Karate. Sign up now for a free trial class!
                </p>
              </div>
              <Button
                size="lg"
                className="bg-red-600 text-white hover:bg-red-700"
              >
                <Link
                  href={"https://wa.me/919092045678"}
                  className="flex items-center"
                >
                  Sign Up Now
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Follow Us on Instagram
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="relative aspect-square">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=Instagram+Post+${i}`}
                    alt={`Instagram Post ${i}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button asChild variant="outline" size="lg">
                <Link href="https://www.instagram.com/__.kaizenisshinryu.__karate.__/">
                  <Instagram className="mr-2 h-5 w-5" />
                  Follow __.kaizenisshinryu.__karate.__
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer id="contact" className="w-full py-6 bg-red-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
              <Link href="https://wa.me/919092045678">
                <p className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  +(91) 90920-45678
                </p>
              </Link>
              <Link href="mailto:kaizenisshinryukarate@gmail.com">
                <p className="flex items-center mt-2">
                  <Mail className="mr-2 h-5 w-5" />
                  kaizenisshinryukarate@gmail.com
                </p>
              </Link>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                <Link className="hover:underline" href="#about" scroll={true}>
                  About
                </Link>
                <Link
                  className="hover:underline"
                  href="#locations"
                  scroll={true}
                >
                  Locations
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <Link
                  href="https://www.instagram.com/__.kaizenisshinryu.__karate.__/"
                  className="hover:text-gray-200"
                >
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">
                    __.kaizenisshinryu.__karate.__
                  </span>
                </Link>
                {/* Add more social media icons as needed */}
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            © 2024 Kaizen Isshinryu. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
