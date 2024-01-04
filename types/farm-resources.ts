import { StaticImageData } from "next/image";

export type Electricity = {
    volt: any;
}

export type ElectricityLineType = {
    name: 'low_voltage' | 'high_voltage'
}

export type ElectricityLine = {}

export type ElectricityLineConditions = {}

export type ElectricityLineConditionType = {
    a: 'working' | 'broken' | 'under_maintainance'
}

export type PoleMaterial = 'wooden' | 'metal' | 'concrete' | 'plastic' | 'pther'

export type Condition = {
    fixedBy: string | null // By Default fixedBy is the Installer
    description: string
    status: 'fixed' | 'broken' | 'fully_damaged'
}

export type Pole = {
    installationDate : Date
    height: number
    poleMaterial: string
    condition: Condition
}

export type FenceType = 'barbed_wire' | 'chain_link' | 'electric_fence' | 'split_rail' | 
                        'wood' | 'concrete_wall' | 'wooden' | 'open_fence' | 'wrought_fence'

export type Fence = {
    fenceType: FenceType
    condition: Condition
    description: string
    heightInMeters: number
    installationDate: Date
    estimatedConstructionDate: Date
    // geometry/polygon/perimeter

}

export type PoleFunction = {
    _function: 'telecommunications' | 'electric' | 'flag' | 'street_lighting' | 'direction' | 'other'
}

export type WaterSource = 'aquifer' | 'river' | 'rainwater' | 'reservoir' | 'other'

export type InfrastructureType = {
    volt: any;
}

export type InfrastructureItem = {
    // volt: any;
    item: string; // e.g desk, chair, water_pump
    // Location Geometry
}

export type InfrastructureLogAction = {
    name: string; // Action Taken (e.g Screwing, Painting, Welding)
}

export type InfrastructureManagementAction = {
    // the process of task that needs to be done on an infrastructure item, e.g. Repair.
};


export type PointOfInterestType = 'bridge' | 'gate' | 
                                'water_point' | 'fence' | 'monitoring_area' | 'storage_area' | 'other';


export type SensorReadingsType = 'bouyancy' | 'moisture' | 'smoke' | 'motion'                             


export type WaterPointType = 'tap' | 'borehole' | 'water_tank' | 'drinking_trough' | 'other'
export type WaterLineType = 'water_pipe'

export type WaterPolygonType = 'reservoir' | 'wetland' | 'lake' | 'pond' | ''


export type Month = 'Jan' | 'Feb' | 'Mar' | 'Apr' | 'May' | 'Jun' | 'Jul' | 'Aug' | 'Sept' | 'Oct' | 'Nov' | 'Dec'


export type PlantGrowthActivityType = 'seeding' | 'sprouting' | 'vegetative' | 'budding' | 'flowering' | 'ripening'

export type PlantUsage = 'food_plant' | 'fodder_plant' | 'commercial_plant' | 'other'

export type PlantType = string // e.g oaktree, etc

export type VegetationPoint = {
    name: string
    description: string
    image: StaticImageData
    estimatedHeightInMeters: number
    EstimatedPlantingYear: number
}

export type PruningActivity = {
    name: string
    description: string
    date: Date
    beforeImage: StaticImageData
    afterImage: StaticImageData
}

export type HarvestActivity = {
    name: string
    image: StaticImageData
    date: Date
    quantityInKg: number
}

/********************************************************************************************************************************

    ----------------------------------------MONITORING STATIONS-------------------------------------

**********************************************************************************************************************************/

export type ReadingUnit = {
    name: string
    abbrev: string
    description: string
}

export type EquipmentType = {
    // Look up table for equipment type, e.g. moisture tester, penetrometers.
    name: string
    url: string
    description: string
    model: string
    manufacturer: string
    calibration_date: Date
}

export type MonitoringStation = {
    name: string
    image: StaticImageData
    // location
}

// soil_ph, soil_temp, estimated_depth_m, image


/********************************************************************************************************************************

    ---------------------------------------- BUILDINGS -------------------------------------

**********************************************************************************************************************************/
export type Building = {
    name: string
    description: string
    // location & Address
    areaInSquareMeters: number
    heightInMeters: number
    image: StaticImageData
    buildingCondition: Condition
}

export type BuildingType = {
    name: string
}

export type BuildingMaterial = {
    image: StaticImageData | null
    description: string
}


/********************************************************************************************************************************

    ---------------------------------------- LANDUSE AREA -------------------------------------

**********************************************************************************************************************************/

export type LanduseAreaType = {
    landuseType : 'agriculture' | 'residential' | 'recreation' | 'commercial' | 'transport'
}

export type LanduseAreaOwnershipType = {
    ownershipType: 'public' | 'private'
}


export type LanduseAreaOwner = {
    name: string
    description: string
    image: StaticImageData
    // add | location
}


export type LanduseArea = {
    name: string
    image: StaticImageData
    condition: Condition
    // geo
}


/********************************************************************************************************************************

    ---------------------------------------- GATES -------------------------------------

**********************************************************************************************************************************/

export type GateType = {
    name: string
    description: string
    image: StaticImageData
}

export type GateFunction = {
    gate_function: string
    description: string
}

export type GateMaterial = {
    name: string
    description: string
}


export type Gate = {
    name: string
    description: string
    image: StaticImageData
    _function: GateFunction
    installationDate: Date
    heightInMeters: number
    widthInMeters: number
    condition: Condition
    // geo loc
}

/**Building Gates => Associate Gates and Buidlings
 * => Associate Gates and Vegetation Areas
 * => Buildings and Water sources
 * => Buildings and Fences
 * => Vegetation and Water Sources
 * => Associate Gates and Fences
 */