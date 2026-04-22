import { useState } from "react";
import Title from "../../SharedComponent/Title/Title";
import { OurRoomsData } from "./OurRoomsData";
import OurRoomsCard from "./OurRoomsCard";
import "./OurRooms.css";

function OurRooms() {
    const [active, setActive] = useState("All");

    const filters = ["All", ...OurRoomsData.map((r) => r.title)];

    const filteredData =
        active === "All"
            ? OurRoomsData
            : OurRoomsData.filter((r) => r.title === active);

    return (
        <>
            <Title
                span="Our Gallery"
                title="Our Rooms Gallery"
                desc="Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school."
            />

            <div className="room-container">
                <div className="filters">
                    {filters.map((f) => (
                        <button
                            key={f}
                            onClick={() => setActive(f)}
                            className={active === f ? "active" : ""}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                <div className="cards-container">
                    {filteredData.map((item) => (
                        <OurRoomsCard
                            key={item.id}
                            title={item.title}
                            images={item.img}
                            content={item.content}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default OurRooms;