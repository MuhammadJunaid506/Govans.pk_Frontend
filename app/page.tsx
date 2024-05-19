import Banner from "@/components/Banner";
import FirstSection from "@/components/FirstSection";
import Navbar from "@/components/Navbar";
import Partnership from "@/components/Partnership";
import SafetyPriority from "@/components/SafetyPriority";
import Image from "next/image";
import Button from "@/components/Button"
import PlatformServices from "@/components/PlatformServices";
import ReviewSlider from "@/components/ReviewSlider";
import Footer from "@/components/Footer";
import OccasionTabs from "@/components/OccasionTabs";
import CompletedRides from "@/components/CompletedRides";
import KeyFeatures from "@/components/KeyFeatures"

export default function Home() {
  return (
    <>
    <Banner Heading="Integrated Transport Solutions: Elevating Corporate, Academic, and Event Mobility" Text="Streamline your corporate, academic, and event transportation with our premium van services. Our integrated solutions prioritize efficiency, professionalism, and punctuality, ensuring a seamless experience for all your mobility needs." Btn={true}/>
    <OccasionTabs/>
    <CompletedRides/>
    <FirstSection/>
    <KeyFeatures/>
    <Partnership/>
    <SafetyPriority Heading="" Btn={Button} BtnText="See How We Put Safety First"/>
    <SafetyPriority Heading="We’re Flexible, Reliable and Cost-Effective" Btn="" BtnText=""/>
    <SafetyPriority Heading="Our Technology is Powerful and Intuitive" Btn={Button} BtnText=""/>
    <PlatformServices/>
    <ReviewSlider/>
    </>
  );
}
