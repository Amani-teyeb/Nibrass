import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Search from "./Search";
import Courses from "./Courses";

const CoursePage = () => {
    const [searchItem, setSearchItem] = useState("");
    console.log(searchItem)

    return (
        <div>
            <main className="py-3">
                <Search setSearchItem={setSearchItem} />
                <Container>
                    <Courses searchItem={searchItem} />
                </Container>
            </main>
        </div>
    );
};

export default CoursePage;