import React, { Component } from 'react';
import BannerImg from '../img/banner-img.jpg';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

class Banner1 extends Component { 
    state = {
        activeIndex: 0,
        animating: false
    }
    items = [
        {
            src: BannerImg ,
            altText: 'Audi',
            caption: 'Audi Model 2020'
        } 
    ];
    next = () => {
        if (this.state.animating) return;
        const nextIndex = this.state.activeIndex === this.items.length - 1 ? 0 : this.state.activeIndex + 1
        this.setState({ activeIndex: nextIndex });
    }

    previous = () => {
        if (this.state.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }


    goToIndex = (newIndex) => {
        if (this.state.animating) return;
        this.setState({ activeIndex: newIndex })
    }
     

    slides = this.items.map((item) => {
        return (
            <CarouselItem
                onExiting={()=>this.setState({ animating: true })}
                onExited={()=>this.setState({ animating: false })}
                key={item.src}>
                <img src={item.src} alt={item.altText}   className="d-block w-100" />
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
        );
    });

    render() {
        return ( 
                <Carousel
                    activeIndex={this.state.activeIndex}
                    next={this.next}
                    previous={this.previous}
                >
                    <CarouselIndicators items={this.items} activeIndex={this.state.activeIndex} onClickHandler={this.goToIndex} />
                    {this.slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel> 
        );
    }
}

export default Banner1;