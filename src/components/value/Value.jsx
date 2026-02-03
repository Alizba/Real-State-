import React, { useState } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import data from "../../utils/accordian";
import accordion from "/images/accordion.jpg";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Value.css";

const Value = () => {
    return (
        <div className="v-wrapper">
            <div className="padding innerWidth flexCenter v-container">
                {/* Left side - Image */}
                <div className="v-left">
                    <div className="image-container">
                        <img src={accordion} alt="accordion" />
                        <div className="image-overlay"></div>
                    </div>
                </div>

                {/* Right side - Content */}
                <div className="flexColStart v-right">
                    <span className="orangeText">Our Value</span>
                    <span className="primaryText">Value we give to you</span>
                    <span className="secondaryText">
                        We are always ready to help by providing the best services for you.
                        <br />
                        We believe a good place to live can make your life better.
                    </span>

                    <Accordion
                        className="accordion"
                        allowMultipleExpanded={false}
                        allowZeroExpanded={true}
                        preExpanded={[0]}
                    >
                        {data.map((item, index) => {
                            const [className, setClassName] = useState(null);
                            return (
                                <AccordionItem
                                    className={`accordionItem ${className}`}
                                    key={index}
                                    uuid={index}
                                >
                                    <AccordionItemHeading>
                                        <AccordionItemButton className="flexCenter accordionButton">
                                            <AccordionItemState>
                                                {({ expanded }) =>
                                                    expanded
                                                        ? setClassName("expanded")
                                                        : setClassName("collapsed")
                                                }
                                            </AccordionItemState>
                                            
                                            <div className="accordion-content-wrapper">
                                                <div className="flexCenter icon">
                                                    {item.icon}
                                                </div>
                                                <span className="primaryText">
                                                    {item.heading}
                                                </span>
                                            </div>
                                            
                                            <div className="arrow-icon">
                                                <MdOutlineArrowDropDown />
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="secondaryText">{item.details}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            );
                        })}
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Value;