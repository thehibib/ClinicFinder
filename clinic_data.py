import json

data = [
    {"Clinic Name": "Caminar", "Location": "2600 South El Camino Real, Suite 200 , San Mateo, CA 94403", "Phone Number": "650-393-8937", "Website": "caminar.org"},
    {"Clinic Name": "WRA/Pioneer Ct/ SUD OP A Program of HealthRIGHT360", "Location": "2015 Pioneer Court, San Mateo, CA 94403", "Phone Number": "650-539-4499", "Website": "www.healthright360.org"},
    {"Clinic Name": "Felton Institue reMIND and BEAM San Mateo", "Location": "1108 South El Camino Real, San Mateo, CA 94402", "Phone Number": "650-458-0026", "Website": "https://felton.org/early-psychosis/san-mateo/"},
    {"Clinic Name": "Casa Aztlan", "Location": "401 Briarfield Way, Belmont, CA 94002", "Phone Number": "650-369-4598", "Website": "http://www.thelatinocommission.org/"},
    {"Clinic Name": "Edgewood Ctr for Children and Families", "Location": "1510 Fashion Island Boulevard, Suite 310 , San Mateo, CA 94404", "Phone Number": "650-517-8220", "Website": "www.edgewood.org"},
    {"Clinic Name": "HealthRIGHT 360 Womens Recovery Association/Laurel", "Location": "900 Laurel Avenue, San Mateo, CA 94401", "Phone Number": "415-235-8254", "Website": "www.healthright360.org"},
    {"Clinic Name": "Mills Peninsula Health Services Behavioral Health Department", "Location": "100 South San Mateo Drive, San Mateo, CA 94401", "Phone Number": "650-696-4690", "Website": "http://www.sutterhealth.org/mills"},
    {"Clinic Name": "Project Ninety Inc A Division of Caminar", "Location": "416 2nd Avenue, San Mateo, CA 94401", "Phone Number": "650-579-7881", "Website": "caminar.org"},
    {"Clinic Name": "HealthRIGHT 360 Womens Recovery Association Hillside", "Location": "27 North Humboldt Street, San Mateo, CA 94401", "Phone Number": "415-235-8254", "Website": "www.healthright360.org"},
    {"Clinic Name": "HealthRIGHT 360 Womens Recovery Association Elms Hous", "Location": "202 East Bellevue Avenue, San Mateo, CA 94401", "Phone Number": "415-235-8254", "Website": "www.healthright360.org"}
]

with open('clinicData.json', 'w') as file:
    json.dump(data, file)