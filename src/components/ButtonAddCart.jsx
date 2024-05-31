import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import FilePresentOutlinedIcon from '@mui/icons-material/FilePresentOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { MenuItem } from "react-pro-sidebar"
import { FlatList } from "react-native"
import { Box, Typography, IconButton, useTheme, Button } from "@mui/material";
import { tokens } from "../theme";
import React, { useState } from 'react';
import useSound from 'use-sound';

const ButtonAddCart = ({ onOptionSelect }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isLoading, setLoading] = useState(true);
    const [image, setImage] = useState(null)
    const [fileName, setFileName] = useState("No selected file")
    const [data, setData] = useState(null);
    const [apiResponse, setapiResponse] = useState(null);

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        if (event.target && event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]);
            setImage(URL.createObjectURL(event.target.files[0]))
            setFileName(event.target.files[0].name);
          } else {
            console.error("File selection failed");
          }
    };

    //Posible
    const uploadImage = async () => {
        const formData = new FormData()
        formData.append('file', selectedFile)

        try {
            const response = await fetch('http://127.0.0.1:5000/predict', {
              method: 'POST',
              body: formData
            });
                
            if (!response.ok){
                throw new Error('Network response problem :c')
            }
            

        const data = await response.json();
        console.log('Ya se subio mijo XD', data);
        setapiResponse(data);
        } catch(error){
            console.error('Error :c intende de nuevo')
        }
    };

    const UploadAndDisplayImage = () => {
        const [selectedImage, setSelectedImage] = useState(null);
        return(
            <div>
                {formData.append('fruteFoto', selectedImage)}
                <img
                    alt="not found"
                    width={"224px"}
                    src={URL.createObjectURL(selectedImage)}
                />
            </div>
        )
    }

    const union_str = (apiResponse) => {
        let all_fruts = '';
        for (let i = 0; i < apiResponse.length; i++)
            {
                all_fruts += apiResponse[i][0];
                all_fruts += ', ';
            }
        return all_fruts;
    }

    const promedio_score = (apiResponse) => {
        let prom_score = 0;
        for (let i = 0; i < apiResponse.length; i++)
            {
                prom_score += apiResponse[i][1];
            }
        return prom_score/apiResponse.length
    }

    const formData = new FormData();
    //formData.append('file', selectedImage);

    return (
        <Box>
            <main>
                <Box
                    align="center"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    border="2px dashed #1475cf"
                    height="250px"
                    width="500px"
                    cursor="grab"
                    borderRadius="15px"
                    onClick={() => document.querySelector(".upload-button").click()}
                >
                    <form action="">
                        <input type="file" accept='image/*.jpg' className='upload-button' hidden
                        onChange={handleFileChange}
                        /*
                        onChange={({ target: {files}}) => {
                            files[0] && setFileName(files[0].name)
                            if(files){
                                setImage(URL.createObjectURL(files[0]))
                            }
                        }}
                        */
                        />
                    
                        {image ?
                        <>
                            <img src={image} width={224} height={224} alt={fileName}/>
                        </>
                        :
                        <>
                        <FileUploadOutlinedIcon width='400px' height='400px'/>
                        <Typography variant='h3'>Browse your images!!!</Typography>
                        </>
                        }
                    </form>
                </Box>

                <Box
                    margin="10px 0"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    padding="15px 20px"
                    //border="2px dashed #1475cf"
                    borderRadius="15px"
                    backgroundColor={colors.primary[500]}
                    cursor="grab"
                    border="2px dashed #1475cf"
                >
                    <section className='uploaded-row'>
                            <FilePresentOutlinedIcon color="#1475cf"/>
                            <span>
                                {fileName} -
                                <DeleteOutlineOutlinedIcon
                                    onClick={() => {
                                        setFileName("No selected File")
                                        setImage(null)
                                        setapiResponse(null)
                                    }}
                                />
                            </span>
                            <FlatList
                                data={data}
                                keyExtractor={({item}) => (
                                    <Typography>
                                        {item.imageClass}, {item.score}
                                    </Typography>
                                )}
                            />
                    </section>
                    {image ? 
                        <Button
                                sx={{ 
                                    backgroundColor: colors.blueAccent[700],
                                    //alignSelf: "center",
                                    //alignContent: "center", 
                                    borderRadius: "15px",
                                    m: "10px",
                                    boxShadow: 15,
                                    width: '150px',
                                    height: 75,
                                }}
                                onClick={uploadImage}
                            >
                                Make prediction
                            </Button>
                        :
                        <></>
                    }
                </Box>
                {apiResponse && (
                    <Box
                        align="center"
                        alignContent="center"
                    >
                        <Box>
                            <Typography variant='h3'>
                            I see {apiResponse.length} frutes 
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant='h3'>
                                I see {union_str(apiResponse)}
                            </Typography>
                        </Box>
                        {/*
                        <img
                        height="224"
                        width="224"
                        src={"../../assets/"+ apiResponse["image class"] + ".jpg"}
                        />
                        */}
                        <Typography variant='h4'>
                            I'm {promedio_score(apiResponse)}% sure
                        </Typography>
                    </Box>
                )}
            </main>
        </Box>
    );
};
/*
<Button
                sx={{ 
                    backgroundColor: colors.blueAccent[700],
                    alignSelf: "center",
                    alignContent: "center", 
                    borderRadius: "15px",
                    m: "10px",
                    boxShadow: 15,
                    width: '800px',
                    height: 75,
                }}
            >
                <MenuItem
                    icon= {
                        <FileUploadOutlinedIcon
                            fontSize= 'large'    
                        />
                    }
                />
            </Button>
*/
export default ButtonAddCart;