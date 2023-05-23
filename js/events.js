
import turtle

def draw_fish():
    window = turtle.Screen()
    window.bgcolor("white")

    brad = turtle.Turtle()
    brad.shape("turtle")
    brad.color("blue")
    brad.speed(1)

    # draw the body of fish
    brad.circle(50)

    # draw the tail of fish
    brad.right(60)
    brad.forward(100)
    brad.right(120)
    brad.forward(100)

    # hide the turtle
    brad.hideturtle()

    # close on click
    window.exitonclick()

draw_fish()
