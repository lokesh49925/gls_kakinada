import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Products.css";
import ProductCard from "./ProductCard";

//icons
import search from "../assets/icons/search.png";
import batIcon from "../assets/images/bat-icon.png";
import BMICON from "../assets/images/BM.png";
import SICON from "../assets/images/swimicon.png";
import JICON from "../assets/images/Jersey.png";
import ShoeIcon from "../assets/images/shoeicon.png";
import VBICON from "../assets/images/volleyballicon.png";
import BBICON from "../assets/images/basketballicon.png";
import SKATEICON from "../assets/images/skatingicon.png";
import TENNISICON from "../assets/images/tennisicon.png";
import TTICON from "../assets/images/TableTennisicon.png";
import WLICON from "../assets/images/Gymicon.png";

//cricket
import SS from "../assets/images/SSbat.jpg";
import SSKIT from "../assets/images/SSKIT.jpg";
import SG from "../assets/images/SG.jpg";
import SGKIT from "../assets/images/SGKIT.Jpg";
import EM from "../assets/images/EM.jpg";
import EMKIT from "../assets/images/EMKIT.jpg";
import TYKA from "../assets/images/TYKA.jpg";
import TYKABAG from "../assets/images/TYKABAG.jpg";
import DSC from "../assets/images/Dsc.jpg";
import DSCKIT from "../assets/images/DSCKIT.jpg";
import MWKIT from "../assets/images/MWKIT.jpg";
import SHREY from "../assets/images/SHREY.jpg";
import BALLS from "../assets/images/Balls.jpg";
import HELMET from "../assets/images/HELMET.jpg";
import STUMPS from "../assets/images/Stumps.jpg";
import PADS from "../assets/images/Pads.png";
import Guard from "../assets/images/Guard.jpg";
import WKGloves from "../assets/images/Wk Gloves.jpg";

//BatMinton
import Yonex from "../assets/images/Yonex.jpg";
import vectorx from "../assets/images/vectorx.jpg";
import lining from "../assets/images/Li-Ning.jpg";
import Hundred from "../assets/images/Hundred.jpg";
import cocks from "../assets/images/cocks.jpg";
import Bnet from "../assets/images/Bnet.jpg";
import Bgrip from "../assets/images/Bgrip.jpeg";
import Bwire from "../assets/images/Bwire.jpg";

//Swimming
import SNivia from "../assets/images/SNivia.jpg";
import SVectorx from "../assets/images/SVectorx.jpg";
import Kamachi from "../assets/images/Kamachi.jpg";
import Skonex from "../assets/images/Skonex.jpg";
import SwimSuit from "../assets/images/SwimSuit.jpg";
import SNose from "../assets/images/SNose.jpg";

//Clothing
import TYKAC from "../assets/images/TYKAC.jpg";
import TECHNO from "../assets/images/Technosport.jpg";
import EMC from "../assets/images/EMC.jpg";

//shoes
import Adidas from "../assets/images/adidas.jpg";
import Asics from "../assets/images/Asics.jpeg";
import NiviaShoe from "../assets/images/niviashoe.jpeg";
import VectorxShoe from "../assets/images/VectorXShoe.webp";
import Sega from "../assets/images/Sega.jpg";
import Puma from "../assets/images/Puma.jpg";
import TycaS from "../assets/images/TycaS.jpeg";

//VolleyBall
import VB from "../assets/images/VOLLEYBALLIMG.png";
import VGEAR from "../assets/images/VolleyBallgear.jpg";
import Vnet from "../assets/images/Vnet.jpg";

//BasketBall

import BB from "../assets/images/BB.jpg";
import BBNET from "../assets/images/BBNET.jpg";
import BBRING from "../assets/images/BBRING.jpg";

//Skating
import Skateboard from "../assets/images/SkateBoard.webp";
import SkateHelmet from "../assets/images/SkateHelmet.jpeg";
import SkateShoe from "../assets/images/SkateShoe.webp";
import SkateGear from "../assets/images/Skate Gear.jpg";

//Tennis
import TR from "../assets/images/TennisRaquet.jpg";
import TB from "../assets/images/TennisBall.jpg";
import TN from "../assets/images/TennisNet.jpg";

//TableTennis
import TTBAT from "../assets/images/TTBAT.jpg";
import TTB from "../assets/images/TTB.jpg";
import TTN from "../assets/images/TTN.jpg";

//WEIGHTCLIFITING
import WL from "../assets/images/WL.jpg";

function Products() {
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState("cricket");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategories, setExpandedCategories] = useState(false);

  // Read query parameter on component mount
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on mount
    const params = new URLSearchParams(location.search);
    const sport = params.get("sport");
    if (sport) {
      setSelectedTab(sport);
      if (
        moreCategories
          .map((cat) => cat.toLowerCase())
          .includes(sport.toLowerCase())
      ) {
        setExpandedCategories(true);
      }
    }
  }, [location.search]);

  const baseCategories = [
    "cricket",
    "Volleyball",
    "Badminton",
    "Swimming",
    "More +",
  ];
  const moreCategories = [
    "Boxing Gloves",
    "Gym Dumbbells",
    "Basketball",
    "Table Tennis",
    "Skating",
    "Running Shoes",
    "Clothing",
    "Tennis",
  ];
  const categories = expandedCategories
    ? [...baseCategories.slice(0, -1), ...moreCategories]
    : baseCategories;

  const products = [
    {
      image: SS,
      tagIcon: batIcon,
      tag: "Cricket",
      category: "cricket",
      title: "SS Cricket Bat",
      description:
        "Experience superior performance with our premium Grade SS Cricket Bat.",
      features: [
        "Hand-selected Grade 1 English Willow",
        "Optimized sweet spot for powerful hitting",
        "12-piece cane handle for shock absorption",
        "and more",
      ],
    },
    {
      image: SSKIT,
      tagIcon: batIcon,
      tag: "Cricket",
      category: "cricket",
      title: "SS CRICKET KIT",
      description:
        "SS cricket kit includes all essential gear for players, combining quality, comfort, and protection.",
      features: [
        "Durable bat and protective equipment",
        "Comfortable pads and gloves",
        "Easy-to-carry kit bag",
      ],
    },
    {
      image: SG,
      tagIcon: batIcon,
      tag: "Cricket",
      category: "cricket",
      title: "SG Cricket Bat",
      description:
        "Experience superior performance with our premium Grade SG Cricket Bat.",
      features: [
        "Hand-selected Grade 1 English Willow",
        "Optimized sweet spot for powerful hitting",
        "12-piece cane handle for shock absorption",
        "and more",
      ],
    },

    {
      image: SGKIT,
      tagIcon: batIcon,
      tag: "Cricket",
      category: "cricket",
      title: "SG CRICKET KIT",
      description:
        "SG cricket kit offers complete gear for players, known for its durability, safety, and performance.",
      features: [
        "High-quality bat and protective gear",
        "Comfortable fit for long play",
        "Spacious and strong kit bag",
      ],
    },

    {
      image: EM,
      tagIcon: batIcon,
      tag: "Cricket",
      category: "cricket",
      title: "EM CRICKET BAT",
      description:
        "EM cricket bat is a lightweight, well-balanced bat made from quality willow, perfect for powerful and controlled shots.",
      features: [
        "Strong willow wood",
        "Easy grip and balance",
        "Great for matches and practice",
      ],
    },

    {
      image: EMKIT,
      tagIcon: batIcon,
      tag: "Cricket",
      category: "cricket",
      title: "EM CRICKET KIT",
      description:
        "EM cricket kit includes all basic gear like bat, pads, gloves, and helmet, designed for comfort, safety, and performance.",
      features: [
        "Durable and lightweight equipment",
        "Complete protection for players",
        "Easy-to-carry kit bag",
      ],
    },

    {
      image: TYKA,
      tagIcon: batIcon,
      tag: "Cricket-Jersey",
      category: "cricket",
      title: "TYKA JERSEY",
      description:
        "Tyka cricket jersey is made from breathable, sweat-absorbing fabric to keep players cool, dry, and comfortable during matches.",
      features: [
        "Lightweight and stretchable material",
        "Quick-dry and moisture-wicking fabric",
        "Perfect fit for active performance",
      ],
    },

    {
      image: TYKABAG,
      tagIcon: batIcon,
      tag: "Cricket-KIT-BAG",
      category: "cricket",
      title: "TYKA KIT BAG",
      description:
        "Tyka cricket jersey is made from breathable, sweat-absorbing fabric to keep players cool, dry, and comfortable during matches.",
      features: [
        "Lightweight and stretchable material",
        "Quick-dry and moisture-wicking fabric",
        "Perfect fit for active performance",
      ],
    },
    {
      image: DSC,
      tagIcon: batIcon,
      tag: "Cricket",
      category: "cricket",
      title: "DSC CRICKET BAT",
      description:
        "DSC cricket bat is crafted from premium willow, offering excellent power, balance, and control for all playing styles.",
      features: [
        "High-quality English or Kashmir willow",
        "Thick edges and curved blade for powerful shots",
        "Comfortable grip and well-balanced design",
      ],
    },

    {
      image: DSCKIT,
      tagIcon: batIcon,
      tag: "Cricket",
      category: "cricket",
      title: "DSC CRICKET KIT",
      description:
        "DSC cricket kit includes top-quality gear like bat, pads, gloves, and helmet, designed for safety, durability, and performance.",
      features: [
        "Strong and comfortable protective gear",
        "Complete set for beginner to advanced players",
        "Spacious and easy-to-carry kit bag",
      ],
    },

    {
      image: MWKIT,
      tagIcon: batIcon,
      tag: "Cricket",
      category: "cricket",
      title: "MOONWALKR GEAR",
      description:
        "Moonwalkr cricket gear is made with modern materials to give strong protection while staying light, slim, and comfortable.",
      features: [
        "Strong impact protection with tough materials",
        "Very light and thinner than regular gear",
        "Comfortable fit with straps and air flow design",
      ],
    },

    {
      image: SHREY,
      tagIcon: batIcon,
      tag: "Cricket",
      category: "cricket",
      title: "SHREY CRICKET KIT",
      description:
        "Shrey cricket bat is crafted from Grade‑one Kashmir willow with a multi‑layered grip, providing powerful strokes with excellent balance and feel.",
      features: [
        "Premium Grade‑1 Kashmir willow blade",
        "Three‑layered rubber grip for comfort and control",
        "Well‑balanced pick‑up ideal for both power and finesse",
      ],
    },
    {
      image: BALLS,
      tagIcon: batIcon,
      tag: "Cricket",
      category: "cricket",
      title: "CRICKET BALLS",
      description:
        "Cricket balls come in red and white colors, used in different formats of the game. Made from leather, they are designed for durability and performance.",
      features: [
        "Red ball used for Test and longer format matches",
        "White ball used for limited-overs formats like ODIs and T20s",
        "Made with high-quality stitched leather for swing and bounce",
      ],
    },
    {
      image: HELMET,
      tagIcon: batIcon,
      tag: "Cricket",
      category: "cricket",
      title: "CRICKET HELMET",
      description:
        "A cricket helmet protects the player’s head and face from fast balls, offering safety with comfort and a strong build.",
      features: [
        "Strong outer shell with impact-resistant material",
        "Adjustable grill for face protection",
        "Cushioned inner padding for comfort and fit",
      ],
    },
    {
      image: STUMPS,
      tagIcon: batIcon,
      tag: "Cricket",
      category: "cricket",
      title: "STUMPS",
      description:
        "Cricket stumps are three vertical wooden poles that form the wicket, used in both bowling and fielding to get a batsman out.",
      features: [
        "Made from durable wood or plastic",
        "Includes three stumps and two bails",
        "Used in all cricket formats for wicket setup",
      ],
    },

    {
      image: PADS,
      tagIcon: batIcon,
      tag: "Cricket",
      category: "cricket",
      title: "ALL TYPE PADS",
      description:
        "Cricket gloves, leg pads, and thigh pads, showing essential protective cricket gear.",
      features: [
        "Includes key protective items",
        "White padded design",
        "Grass background display",
      ],
    },

    {
      image: WKGloves,
      tagIcon: batIcon,
      tag: "Cricket",
      category: "cricket",
      title: "KEEPER GLOVES",
      description:
        "Wicket keeper gloves designed for grip, protection, and quick catches during matches.",
      features: [
        "Strong grip with padded fingers",
        "Reinforced palm for shock absorption",
        "Durable and lightweight design",
      ],
    },

    {
      image: Guard,
      tagIcon: batIcon,
      tag: "Cricket",
      category: "cricket",
      title: "GUARD",
      description:
        "Cricket abdominal guard protects players from impact in sensitive areas during play.",
      features: [
        "Hard outer shell for impact protection",
        "Soft padding inside for comfort",
        "Snug fit inside jockstrap or shorts",
      ],
    },

    // Badminton starts here
    {
      image: Yonex,
      tagIcon: BMICON,
      tag: "Badminton",
      category: "Badminton",
      title: "YONEX RACKETS",
      description:
        "Yonex badminton kit is trusted by professionals for its premium quality and performance.",
      features: [
        "Lightweight and durable rackets",
        "Comfortable grip and strong strings",
        "Stylish and spacious kit bag",
      ],
    },

    {
      image: lining,
      tagIcon: BMICON,
      tag: "Badminton",
      category: "Badminton",
      title: "LI-NING RACKETS",
      description:
        "Li-Ning badminton kit offers a blend of power, speed, and control for all levels.",
      features: [
        "Balanced rackets for attack and defense",
        "Durable materials with sleek design",
        "Ideal for intermediate to advanced players",
      ],
    },

    {
      image: Hundred,
      tagIcon: BMICON,
      tag: "Badminton",
      category: "Badminton",
      title: "HUNDRED RACKETS",
      description:
        "Hundred badminton kit is a budget-friendly option for beginners and casual players.",
      features: [
        "Easy-to-use rackets",
        "Decent grip and string tension",
        "Good value for daily practice",
      ],
    },

    {
      image: vectorx,
      tagIcon: BMICON,
      tag: "Badminton",
      category: "Badminton",
      title: "VECTOR-X RACKETS",
      description:
        "Vector X badminton kit provides reliable gear for school and recreational use.",
      features: [
        "Strong frame with basic control",
        "Comfortable grip and string setup",
        "Affordable and easy to carry",
      ],
    },

    {
      image: cocks,
      tagIcon: BMICON,
      tag: "Badminton",
      category: "Badminton",
      title: "SHUTTLE COCKS",
      description:
        "Badminton shuttlecocks are used in play and come in feather or nylon types, designed for consistent flight and durability.",
      features: [
        "Available in feather (for pros) and nylon (for practice)",
        "Stable flight and good visibility",
        "Used in all formats of the game",
      ],
    },

    {
      image: Bnet,
      tagIcon: BMICON,
      tag: "Badminton",
      category: "Badminton",
      title: "BADMINTON NETS",
      description:
        "Badminton nets are used to divide the court and are made from strong mesh for indoor or outdoor play.",
      features: [
        "Standard height and width for all levels",
        "Durable nylon or polyester material",
        "Easy to set up and carry",
      ],
    },

    {
      image: Bgrip,
      tagIcon: BMICON,
      tag: "Badminton",
      category: "Badminton",
      title: "BADMINTON GRIPS",
      description:
        "Badminton grips improve racket hold, reduce sweat, and add comfort during play.",
      features: [
        "Available in towel, PU, and overgrip types",
        "Non-slip and sweat-absorbing",
        "Easy to wrap and replace",
      ],
    },
    {
      image: Bwire,
      tagIcon: BMICON,
      tag: "Badminton",
      category: "Badminton",
      title: "RACKET STRINGS",
      description:
        "Badminton strings (wire) affect the power and control of your shots, available in different tensions and thicknesses.",
      features: [
        "High-tension strings for power and control",
        "Durable and suitable for all playing levels",
        "Used in both synthetic and natural gut options",
      ],
    },

    //swimming
    {
      image: SNivia,
      tagIcon: SICON,
      tag: "Swimming",
      category: "Swimming",
      title: "NIVIA SWIM KIT",
      description:
        "NIVIA swim kit offers quality gear for beginners and regular swimmers with comfort and durability.",
      features: [
        "Comfortable goggles and cap",
        "Quick-dry towel and carry pouch",
        "Great for training and fitness swimming",
      ],
    },

    {
      image: SwimSuit,
      tagIcon: SICON,
      tag: "Swimming",
      category: "Swimming",
      title: "SWIMSUIT",
      description:
        "Swimsuits are designed for comfort, flexibility, and speed during swimming.",
      features: [
        "Stretchable and quick-dry fabric",
        "Snug fit for better movement in water",
        "Available for men, women, and kids",
      ],
    },

    {
      image: SNose,
      tagIcon: SICON,
      tag: "Swimming",
      category: "Swimming",
      title: "NOSE CLIP",
      description:
        "A nose clip helps swimmers keep water out of their nose while swimming.",
      features: [
        "Soft, comfortable pads for a secure fit",
        "Lightweight and easy to wear",
        "Useful for training and underwater swimming",
      ],
    },

    {
      image: Kamachi,
      tagIcon: SICON,
      tag: "Swimming",
      category: "Swimming",
      title: "KAMACHI SWIM KIT",
      description:
        "KAMACHI swim kit provides affordable gear for schools, beginners, and training sessions.",
      features: [
        "Includes goggles, cap, and towel",
        "Sturdy material and easy fit",
        "Budget-friendly and travel-ready",
      ],
    },
    {
      image: SVectorx,
      tagIcon: SICON,
      tag: "Swimming",
      category: "Swimming",
      title: "VECTORX SWIM KIT",
      description:
        "VECTOR X swim kit is designed for fitness swimmers with reliable, easy-to-use accessories.",
      features: [
        "Durable goggles with adjustable strap",
        "Soft cap and absorbent towel",
        "Comes with a compact swim bag",
      ],
    },

    {
      image: Skonex,
      tagIcon: SICON,
      tag: "Swimming",
      category: "Swimming",
      title: "KONEX SWIM KIT",
      description:
        "KONEX swim kit is a basic set ideal for casual swimmers and kids starting out.",
      features: [
        "Simple goggles and swim cap",
        "Lightweight and easy to carry",
        "Perfect for beginners and fun use",
      ],
    },

    //clothing

    {
      image: TYKAC,
      tagIcon: JICON,
      tag: "Clothing",
      category: "Clothing",
      title: "TYKA SPORTS WEAR",
      description:
        "Tyka sports clothing is designed for comfort, performance, and style across various sports and training sessions.",
      features: [
        "Breathable, sweat-wicking fabric",
        "Stretchable fit for easy movement",
        "Available in jerseys, shorts, track pants, and more",
      ],
    },

    {
      image: TECHNO,
      tagIcon: JICON,
      tag: "Clothing",
      category: "Clothing",
      title: "TECHNO SPORTS WEAR",
      description:
        "Technosport sportswear offers stylish, high-performance activewear for workouts, sports, and daily wear.",
      features: [
        "Moisture-wicking and breathable fabric",
        "Comfortable fit with modern design",
        "Ideal for gym, running, and casual use",
      ],
    },

    {
      image: EMC,
      tagIcon: JICON,
      tag: "Clothing",
      category: "Clothing",
      title: "EM SPORTS WEAR",
      description:
        "EM sportswear provides affordable and comfortable clothing for sports and fitness activities.",
      features: [
        "Lightweight and breathable material",
        "Good for training and casual use",
        "Available in T-shirts, shorts, and trackwear",
      ],
    },

    //Running shoes

    {
      image: Puma,
      tagIcon: ShoeIcon,
      tag: "Running Shoes",
      category: "Running Shoes",
      title: "PUMA",
      description:
        "Puma shoes combine performance, style, and comfort, making them ideal for sports, fitness, and everyday wear.",
      features: [
        "Durable and lightweight design",
        "Cushioned sole for maximum comfort",
        "Available in running, training, and casual styles",
      ],
    },

    {
      image: Adidas,
      tagIcon: ShoeIcon,
      tag: "Running Shoes",
      category: "Running Shoes",
      title: "ADIDAS",
      description:
        "Adidas Sports offers high-performance gear designed to support athletes in training, competition, and everyday fitness routines.",
      features: [
        "Engineered with moisture-wicking and breathable fabrics",
        "Ideal for gym, running, football, and other sports activities",
        "Includes T-shirts, shorts, track pants, and performance footwear",
      ],
    },

    {
      image: Asics,
      tagIcon: ShoeIcon,
      tag: "Running Shoes",
      category: "Running Shoes",
      title: "ASICS",
      description:
        "Asics sports shoes are built for performance and comfort, trusted by athletes for running, training, and sports activities.",
      features: [
        "GEL™ technology for shock absorption and cushioning",
        "Breathable mesh upper for enhanced airflow",
        "Designed for stability, support, and long-distance comfort",
      ],
    },

    {
      image: NiviaShoe,
      tagIcon: ShoeIcon,
      tag: "Running Shoes",
      category: "Running Shoes",
      title: "NIVIA",
      description:
        "Nivia sports shoes offer reliable performance and comfort at an affordable price, perfect for training, gym, and outdoor sports.",
      features: [
        "Lightweight build with durable outsole",
        "Comfortable inner padding for all-day wear",
        "Suitable for running, gym workouts, and casual sports",
      ],
    },

    {
      image: TycaS,
      tagIcon: ShoeIcon,
      tag: "Running Shoes",
      category: "Running Shoes",
      title: "TYKA",
      description:
        "TYKA sports shoes are designed for active performance, offering durability and comfort for both professional and everyday athletes.",
      features: [
        "Sturdy sole with good grip for multi-surface use",
        "Breathable upper for ventilation during intense activity",
        "Ideal for cricket, training, and general fitness routines",
      ],
    },

    {
      image: Sega,
      tagIcon: ShoeIcon,
      tag: "Running Shoes",
      category: "Running Shoes",
      title: "SEGA",
      description:
        "SEGA sports shoes deliver dependable comfort and performance, catering to athletes and fitness enthusiasts across various sports.",
      features: [
        "Durable sole with strong traction for better grip",
        "Padded interior for enhanced comfort and support",
        "Suitable for running, gym workouts, and field sports",
      ],
    },

    {
      image: VectorxShoe,
      tagIcon: ShoeIcon,
      tag: "Running Shoes",
      category: "Running Shoes",
      title: "VECTOR-X",
      description:
        "Vector X sports shoes are crafted for athletes who seek performance, comfort, and durability across multiple sports activities.",
      features: [
        "Anti-slip outsole for improved stability and grip",
        "Cushioned insole for better shock absorption",
        "Perfect for running, training, football, and gym sessions",
      ],
    },
    //VOLLEYBALL
    {
      image: VB,
      tagIcon: VBICON,
      tag: "Volley Ball",
      category: "Volleyball",
      title: "VOLLEY BALL",
      description:
        "A volleyball is a lightweight, durable ball crafted for fast-paced indoor and beach matches, offering precision control and optimal bounce.",
      features: [
        "Made from synthetic leather or microfiber with an air-retaining bladder",
        "Official size: 65–67 cm circumference; weight: 260–280 g",
        "Ideal for passing, setting, spiking, and serving in competitive play",
      ],
    },

    {
      image: Vnet,
      tagIcon: VBICON,
      tag: "Volley Ball",
      category: "Volleyball",
      title: "VOLLEY BALL NET",
      description:
        "A volleyball net is a durable mesh barrier designed to divide the court and regulate play, essential for both indoor and outdoor matches.",
      features: [
        "Made from high-quality nylon or polyester mesh for durability",
        "Standard size: 9.5–10 meters long and 1 meter high",
        "Reinforced edges and steel cable for stable installation",
      ],
    },

    {
      image: VGEAR,
      tagIcon: VBICON,
      tag: "Volley Ball",
      category: "Volleyball",
      title: "SLEEVE AND KNEE PAD",
      description:
        "Volleyball sleeves and kneepads provide essential protection and support during intense matches, helping prevent injuries and enhance performance.",
      features: [
        "Made with stretchable, breathable fabric for comfort and flexibility",
        "Kneepads feature impact-absorbing padding to protect against falls and dives",
        "Sleeves offer compression to improve blood circulation and reduce muscle fatigue",
      ],
    },

    //BasketBall
    {
      image: BB,
      tagIcon: BBICON,
      tag: "Basket Ball",
      category: "Basketball",
      title: "BASKET BALL",
      description:
        "A basketball is a durable, high-bounce ball designed for fast-paced indoor and outdoor play, ideal for dribbling, passing, and shooting.",
      features: [
        "Made of composite leather or rubber for grip and durability",
        "Standard size: 29.5 inches (size 7) for men, 28.5 inches (size 6) for women",
        "Designed for consistent bounce and control on various surfaces",
      ],
    },

    {
      image: BBNET,
      tagIcon: BBICON,
      tag: "Basket Ball",
      category: "Basketball",
      title: "BASKET BALL NET",
      description:
        "A basketball net is an essential hoop accessory that enhances scoring visibility and provides the classic swish sound during play.",
      features: [
        "Made from durable nylon or polyester for long-lasting use",
        "Standard length: 18 inches, fits all regulation rims",
        "Weather-resistant design suitable for indoor and outdoor courts",
      ],
    },

    {
      image: BBRING,
      tagIcon: BBICON,
      tag: "Basket Ball",
      category: "Basketball",
      title: "BASKET BALL RING",
      description:
        "A basketball ring is a solid metal rim mounted on a backboard, essential for scoring in the game, used in both indoor and outdoor courts.",
      features: [
        "Made of heavy-duty steel for strength and durability",
        "Standard diameter: 18 inches, fits regulation-size balls",
        "Includes mounting brackets and net hooks for easy setup",
      ],
    },

    //skating

    {
      image: Skateboard,
      tagIcon: SKATEICON,
      tag: "Skating",
      category: "Skating",
      title: "SKATE BOARD",
      description:
        "A skateboard is a flat, wheeled board used for tricks, commuting, and recreational riding, popular among youth and extreme sports enthusiasts.",
      features: [
        "Deck made from durable maple wood or composite materials",
        "Equipped with high-quality trucks, bearings, and polyurethane wheels",
        "Available in various sizes for beginners, cruisers, and pro-level tricks",
      ],
    },

    {
      image: SkateShoe,
      tagIcon: SKATEICON,
      tag: "Skating",
      category: "Skating",
      title: "SKATE SHOES",
      description:
        "Skate shoes are specially designed footwear built to handle the demands of skateboarding, offering grip, durability, and impact protection.",
      features: [
        "Flat, grippy rubber soles for better board control",
        "Reinforced toe caps and padded collars for durability and comfort",
        "Shock-absorbing insoles to reduce impact from jumps and tricks",
      ],
    },
    {
      image: SkateHelmet,
      tagIcon: SKATEICON,
      tag: "Skating",
      category: "Skating",
      title: "SKATING HELMET",
      description:
        "A skate helmet is a protective headgear designed to safeguard skaters from head injuries during falls, tricks, and high-impact moves.",
      features: [
        "Made with a tough ABS outer shell and EPS foam liner for impact protection",
        "Adjustable straps and ventilation holes for comfort and fit",
        "Certified for skateboarding, BMX, and inline skating safety standards",
      ],
    },

    {
      image: SkateGear,
      tagIcon: SKATEICON,
      tag: "Skating",
      category: "Skating",
      title: "SKATING GEAR",
      description:
        "Skate gear includes essential protective equipment and accessories designed to ensure safety and enhance performance during roller skating sessions.",
      features: [
        "Includes helmet, knee pads, elbow pads, and wrist guards for full-body protection",
        "Durable materials with shock-absorbing padding for impact resistance",
        "Breathable, adjustable design for a secure and comfortable fit",
      ],
    },

    //Tennis

    {
      image: TR,
      tagIcon: TENNISICON,
      tag: "TENNIS",
      category: "Tennis",
      title: "TENNIS RACQUET",
      description:
        "A tennis racquet is a lightweight, high-tension frame used to strike the tennis ball, designed for control, power, and precision in gameplay.",
      features: [
        "Made from graphite, aluminum, or carbon fiber for strength and agility",
        "String pattern optimized for spin and control",
        "Ergonomic grip and balanced frame for comfortable handling",
      ],
    },

    {
      image: TB,
      tagIcon: TENNISICON,
      tag: "Tennis",
      category: "Tennis",
      title: "TENNIS BALLS",
      description:
        "Tennis balls are felt-covered, pressurized balls designed for consistent bounce, speed, and playability across different surfaces.",
      features: [
        "Standard size: 6.54–6.86 cm diameter; weight: 56.0–59.4 g",
        "Pressurized rubber core for optimal bounce",
        "Covered with durable felt for control and visibility",
      ],
    },

    {
      image: TN,
      tagIcon: TENNISICON,
      tag: "Tennis",
      category: "Tennis",
      title: "TENNIS NET",
      description:
        "A tennis net is a key component of the court that divides play between opponents and ensures regulated gameplay.",
      features: [
        "Made from durable nylon or polyester mesh",
        "Standard length: 12.8 meters (42 feet), center height: 0.91 meters (3 feet)",
        "Includes reinforced headband and steel cable for tension and support",
      ],
    },

    //TableTennis
    {
      image: TTBAT,
      tagIcon: TTICON,
      tag: "Table Tennis",
      category: "Table Tennis",
      title: "TABLE TENNIS BAT",
      description:
        "A table tennis bat, also known as a paddle or racket, is used to strike the ball with precision, spin, and speed in competitive or casual play.",
      features: [
        "Made of laminated wood with rubber on one or both sides",
        "Ergonomic handle for better grip and control",
        "Available in different rubber types for varied playing styles (offensive, defensive, all-round)",
      ],
    },
    {
      image: TTB,
      tagIcon: TTICON,
      tag: "Table Tennis",
      category: "Table Tennis",
      title: "TABLE TENNIS BALLS",
      description:
        "Table tennis balls are lightweight, hollow plastic balls designed for consistent bounce and fast-paced play.",
      features: [
        "Standard size: 40 mm diameter; weight: 2.7 g",
        "Seamless and made of ABS plastic for durability",
        "Available in 1-star to 3-star ratings for different levels of play",
      ],
    },

    {
      image: TTN,
      tagIcon: TTICON,
      tag: "Table Tennis",
      category: "Table Tennis",
      title: "TABLE TENNIS NET",
      description:
        "A table tennis net is a compact mesh barrier that divides the table and is essential for regulated gameplay.",
      features: [
        "Standard length: 1.83 meters (6 feet); height: 15.25 cm (6 inches)",
        "Made from nylon or cotton mesh with a sturdy frame and clamps",
        "Adjustable tension and easy clip-on design for quick setup",
      ],
    },
    //WEIGHTLIFITING
    {
      image: WL,
      tagIcon: WLICON,
      tag: "Weightlifting",
      category: "Gym Dumbbells",
      title: "WEIGHTLIFTING DUMBBELLS",
      description:
        "Weightlifting dumbbells are versatile strength training tools used to build muscle, improve endurance, and enhance overall fitness.",
      features: [
        "Available in fixed or adjustable weight options",
        "Made from materials like cast iron, rubber-coated metal, or neoprene",
        "Ergonomic handles with anti-slip grip for safe and comfortable lifting",
      ],
    },
  ];

  const sortedProducts = [...products].sort((a, b) => {
    const query = searchQuery.toLowerCase().trim();

    if (query) {
      const aStartsWith = a.category.toLowerCase().startsWith(query);
      const bStartsWith = b.category.toLowerCase().startsWith(query);

      if (aStartsWith && !bStartsWith) return -1;
      if (!aStartsWith && bStartsWith) return 1;
      return 0;
    }

    if (
      a.category.toLowerCase() === selectedTab.toLowerCase() &&
      b.category.toLowerCase() !== selectedTab.toLowerCase()
    ) {
      return -1;
    }
    if (
      b.category.toLowerCase() === selectedTab.toLowerCase() &&
      a.category.toLowerCase() !== selectedTab.toLowerCase()
    ) {
      return 1;
    }
    return 0;
  });

  const handleSearchClick = () => {
    setIsSearchOpen(true);
  };

  const handleCloseSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
    setSelectedTab("cricket");
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleTabClick = (category) => {
    if (category === "More +") {
      setExpandedCategories(true);
      setSelectedTab(moreCategories[0]);
    } else {
      setSelectedTab(category);
    }
  };

  return (
    <section id="Products">
      <div className="product-section">
        <h2 className="title">Our Products</h2>
        <p className="subtitle">
          Browse our wide selection of high-quality sports equipment and
          apparel. We stock everything you need to excel in your game.
        </p>

        <div
          className={`tab-container ${expandedCategories ? "expanded" : ""}`}
        >
          {!isSearchOpen ? (
            <div className="tab-wrapper">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`tab-button ${
                    selectedTab.toLowerCase() === category.toLowerCase()
                      ? "active"
                      : ""
                  }`}
                  onClick={() => handleTabClick(category)}
                >
                  {category}
                </button>
              ))}
              <span className="search-icon" onClick={handleSearchClick}>
                <img src={search} alt="Search"  />
              </span>
            </div>
          ) : (
            <div className="search-bar">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search by category..."
                className="search-input"
              />
              <span className="search-close "  onClick={handleCloseSearch}>
                ✖
              </span>
            </div>
          )}
        </div>

        <div className="cards-wrapper">
          {sortedProducts.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              tagIcon={product.tagIcon}
              tag={product.tag}
              title={product.title}
              description={product.description}
              features={product.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
