Feature: BrowserStack Demo

    @Regression
    Scenario Outline: Scenario Outline name: Purchase a Mobile
        Given login to application
        When add to cart "<itemName>"
        And add shipment details with "<firsName>","<lastName>","<addressLine>","<province>","<postalCode>"
        Then validate order is placed successfully

        Examples:
        | itemName             |firsName |lastName |addressLine |province |postalCode |
        | Galaxy Note 20 Ultra |Vivek    |Sinha    |Lalpur      |Ranchi   |834001     |
        | iPhone 12 Pro Max    |Priyanka |Yadav    |Lalpur      |Ranchi   |834001     |
        | iPhone 12 Pro Max    |Rishiv   |Sinha    |Lalpur      |Ranchi   |834001     |
        | iPhone 12 Pro Max    |Vivek    |Sinha    |Lalpur      |Ranchi   |834001     |