VERSION 5.00
Object = "{6BF52A50-394A-11D3-B153-00C04F79FAA6}#1.0#0"; "wmp.dll"
Begin VB.Form Form4 
   BackColor       =   &H00000000&
   BorderStyle     =   1  'Fixed Single
   ClientHeight    =   11490
   ClientLeft      =   195
   ClientTop       =   15
   ClientWidth     =   20460
   ControlBox      =   0   'False
   LinkTopic       =   "Form4"
   MaxButton       =   0   'False
   MinButton       =   0   'False
   Picture         =   "Form4.frx":0000
   ScaleHeight     =   11490
   ScaleWidth      =   20460
   Begin VB.PictureBox regpic 
      Appearance      =   0  'Flat
      BackColor       =   &H80000005&
      ForeColor       =   &H80000008&
      Height          =   11760
      Left            =   0
      Picture         =   "Form4.frx":D6E8
      ScaleHeight     =   11730
      ScaleWidth      =   8985
      TabIndex        =   27
      Top             =   -120
      Width           =   9015
      Begin VB.Label tbllbl1 
         BackStyle       =   0  'Transparent
         Caption         =   "BOOKING"
         BeginProperty Font 
            Name            =   "Georgia"
            Size            =   15.75
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   495
         Index           =   6
         Left            =   3120
         TabIndex        =   37
         Top             =   6360
         Width           =   2175
      End
      Begin VB.Label tbllbl1 
         BackStyle       =   0  'Transparent
         Caption         =   "DELIVERY"
         BeginProperty Font 
            Name            =   "Georgia"
            Size            =   15.75
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   495
         Index           =   8
         Left            =   3120
         TabIndex        =   36
         Top             =   7560
         Width           =   2175
      End
      Begin VB.Label tbllbl1 
         BackStyle       =   0  'Transparent
         Caption         =   "CUSTOMER"
         BeginProperty Font 
            Name            =   "Georgia"
            Size            =   15.75
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   495
         Index           =   7
         Left            =   3120
         TabIndex        =   35
         Top             =   6960
         Width           =   2175
      End
      Begin VB.Label tbllbl1 
         BackStyle       =   0  'Transparent
         Caption         =   "STOCK"
         BeginProperty Font 
            Name            =   "Georgia"
            Size            =   15.75
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   495
         Index           =   5
         Left            =   3120
         TabIndex        =   34
         Top             =   5760
         Width           =   2175
      End
      Begin VB.Label tbllbl1 
         BackStyle       =   0  'Transparent
         Caption         =   "SERVICES"
         BeginProperty Font 
            Name            =   "Georgia"
            Size            =   15.75
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   495
         Index           =   4
         Left            =   3120
         TabIndex        =   33
         Top             =   5160
         Width           =   2175
      End
      Begin VB.Label tbllbl1 
         BackStyle       =   0  'Transparent
         Caption         =   "FITTINGS"
         BeginProperty Font 
            Name            =   "Georgia"
            Size            =   15.75
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   495
         Index           =   3
         Left            =   3120
         TabIndex        =   32
         Top             =   4560
         Width           =   2175
      End
      Begin VB.Label tbllbl1 
         BackStyle       =   0  'Transparent
         Caption         =   "COLOUR"
         BeginProperty Font 
            Name            =   "Georgia"
            Size            =   15.75
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   495
         Index           =   2
         Left            =   3120
         TabIndex        =   31
         Top             =   3960
         Width           =   2175
      End
      Begin VB.Label tbllbl1 
         BackStyle       =   0  'Transparent
         Caption         =   "MODEL"
         BeginProperty Font 
            Name            =   "Georgia"
            Size            =   15.75
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   495
         Index           =   1
         Left            =   3120
         TabIndex        =   30
         Top             =   3360
         Width           =   2175
      End
      Begin VB.Label tbllbl1 
         BackStyle       =   0  'Transparent
         Caption         =   "BODY_WORK"
         BeginProperty Font 
            Name            =   "Georgia"
            Size            =   15.75
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   495
         Index           =   9
         Left            =   3120
         TabIndex        =   29
         Top             =   2760
         Width           =   2175
      End
      Begin VB.Label tbllbl1 
         BackStyle       =   0  'Transparent
         Caption         =   "CLASS"
         BeginProperty Font 
            Name            =   "Georgia"
            Size            =   15.75
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   495
         Index           =   0
         Left            =   3120
         TabIndex        =   28
         Top             =   2160
         Width           =   2175
      End
      Begin VB.Image Image1 
         Height          =   495
         Index           =   5
         Left            =   -720
         Picture         =   "Form4.frx":7A0F8
         Stretch         =   -1  'True
         Top             =   5160
         Width           =   9975
      End
      Begin VB.Image Image2 
         Height          =   495
         Left            =   -360
         Picture         =   "Form4.frx":A7708
         Stretch         =   -1  'True
         Top             =   5760
         Width           =   9975
      End
      Begin VB.Image Image3 
         Height          =   495
         Left            =   -720
         Picture         =   "Form4.frx":D4D18
         Stretch         =   -1  'True
         Top             =   6960
         Width           =   9975
      End
      Begin VB.Image Image4 
         Height          =   495
         Left            =   -360
         Picture         =   "Form4.frx":102328
         Stretch         =   -1  'True
         Top             =   7560
         Width           =   9975
      End
      Begin VB.Image Image5 
         Height          =   495
         Left            =   -360
         Picture         =   "Form4.frx":12F938
         Stretch         =   -1  'True
         Top             =   3960
         Width           =   9975
      End
      Begin VB.Image Image9 
         Height          =   495
         Left            =   -720
         Picture         =   "Form4.frx":15CF48
         Stretch         =   -1  'True
         Top             =   4560
         Width           =   9975
      End
      Begin VB.Image Image8 
         Height          =   495
         Left            =   -120
         Picture         =   "Form4.frx":18A558
         Stretch         =   -1  'True
         Top             =   2160
         Width           =   9975
      End
      Begin VB.Image Image7 
         Height          =   495
         Left            =   -120
         Picture         =   "Form4.frx":1B7B68
         Stretch         =   -1  'True
         Top             =   2760
         Width           =   9975
      End
      Begin VB.Image Image11 
         Height          =   495
         Left            =   -120
         Picture         =   "Form4.frx":1E5178
         Stretch         =   -1  'True
         Top             =   3360
         Width           =   9975
      End
      Begin VB.Image Image6 
         Height          =   495
         Left            =   -480
         Picture         =   "Form4.frx":212788
         Stretch         =   -1  'True
         Top             =   6360
         Width           =   9975
      End
   End
   Begin VB.PictureBox vbar 
      AutoSize        =   -1  'True
      Height          =   34020
      Left            =   19440
      Picture         =   "Form4.frx":23FD98
      ScaleHeight     =   33960
      ScaleWidth      =   1035
      TabIndex        =   10
      Top             =   -1080
      Width           =   1095
      Begin VB.Label bar3lbl1 
         Alignment       =   2  'Center
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "1"
         BeginProperty Font 
            Name            =   "Times New Roman"
            Size            =   12
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   285
         Index           =   0
         Left            =   525
         TabIndex        =   25
         Top             =   2040
         Width           =   135
      End
      Begin VB.Label backward 
         BackStyle       =   0  'Transparent
         Height          =   375
         Left            =   0
         TabIndex        =   24
         Top             =   840
         Width           =   1095
      End
      Begin VB.Label forward 
         BackStyle       =   0  'Transparent
         Height          =   375
         Left            =   0
         TabIndex        =   23
         Top             =   12240
         Width           =   1095
      End
      Begin VB.Label bar3lbl1 
         Alignment       =   2  'Center
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "2"
         BeginProperty Font 
            Name            =   "Times New Roman"
            Size            =   12
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   285
         Index           =   1
         Left            =   525
         TabIndex        =   22
         Top             =   2835
         Width           =   135
      End
      Begin VB.Label bar3lbl1 
         Alignment       =   2  'Center
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "3"
         BeginProperty Font 
            Name            =   "Times New Roman"
            Size            =   12
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   285
         Index           =   2
         Left            =   525
         TabIndex        =   21
         Top             =   3645
         Width           =   135
      End
      Begin VB.Label bar3lbl1 
         Alignment       =   2  'Center
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "4"
         BeginProperty Font 
            Name            =   "Times New Roman"
            Size            =   12
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   285
         Index           =   3
         Left            =   525
         TabIndex        =   20
         Top             =   4440
         Width           =   135
      End
      Begin VB.Label bar3lbl1 
         Alignment       =   2  'Center
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "5"
         BeginProperty Font 
            Name            =   "Times New Roman"
            Size            =   12
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   285
         Index           =   4
         Left            =   525
         TabIndex        =   19
         Top             =   5235
         Width           =   135
      End
      Begin VB.Label bar3lbl1 
         Alignment       =   2  'Center
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "6"
         BeginProperty Font 
            Name            =   "Times New Roman"
            Size            =   12
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   285
         Index           =   5
         Left            =   525
         TabIndex        =   18
         Top             =   6045
         Width           =   135
      End
      Begin VB.Label bar3lbl1 
         Alignment       =   2  'Center
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "7"
         BeginProperty Font 
            Name            =   "Times New Roman"
            Size            =   12
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   285
         Index           =   6
         Left            =   525
         TabIndex        =   17
         Top             =   6840
         Width           =   135
      End
      Begin VB.Label bar3lbl1 
         Alignment       =   2  'Center
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "8"
         BeginProperty Font 
            Name            =   "Times New Roman"
            Size            =   12
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   285
         Index           =   7
         Left            =   525
         TabIndex        =   16
         Top             =   7635
         Width           =   135
      End
      Begin VB.Label bar3lbl1 
         Alignment       =   2  'Center
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "9"
         BeginProperty Font 
            Name            =   "Times New Roman"
            Size            =   12
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   285
         Index           =   8
         Left            =   525
         TabIndex        =   15
         Top             =   8445
         Width           =   135
      End
      Begin VB.Label bar3lbl1 
         Alignment       =   2  'Center
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "10"
         BeginProperty Font 
            Name            =   "Times New Roman"
            Size            =   12
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   285
         Index           =   9
         Left            =   465
         TabIndex        =   14
         Top             =   9240
         Width           =   255
      End
      Begin VB.Label bar3lbl1 
         Alignment       =   2  'Center
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "11"
         BeginProperty Font 
            Name            =   "Times New Roman"
            Size            =   12
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   285
         Index           =   10
         Left            =   465
         TabIndex        =   13
         Top             =   10035
         Width           =   255
      End
      Begin VB.Label bar3lbl1 
         Alignment       =   2  'Center
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "12"
         BeginProperty Font 
            Name            =   "Times New Roman"
            Size            =   12
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   285
         Index           =   11
         Left            =   465
         TabIndex        =   12
         Top             =   10845
         Width           =   255
      End
      Begin VB.Label bar3lbl1 
         Alignment       =   2  'Center
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "13"
         BeginProperty Font 
            Name            =   "Times New Roman"
            Size            =   12
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   285
         Index           =   12
         Left            =   465
         TabIndex        =   11
         Top             =   11640
         Width           =   255
      End
   End
   Begin VB.PictureBox Picture11 
      Appearance      =   0  'Flat
      BackColor       =   &H00000000&
      BorderStyle     =   0  'None
      ForeColor       =   &H80000008&
      Height          =   7935
      Left            =   6600
      ScaleHeight     =   7935
      ScaleWidth      =   15930
      TabIndex        =   4
      Top             =   6600
      Width           =   15930
      Begin VB.Label Label5 
         Alignment       =   2  'Center
         BackStyle       =   0  'Transparent
         Caption         =   "9"
         BeginProperty Font 
            Name            =   "Times New Roman"
            Size            =   36
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFF00&
         Height          =   1335
         Left            =   6600
         TabIndex        =   26
         Top             =   1440
         Width           =   1095
      End
      Begin VB.Image Image1 
         Height          =   1560
         Index           =   3
         Left            =   6240
         Picture         =   "Form4.frx":246D53
         Stretch         =   -1  'True
         Top             =   1800
         Width           =   2160
      End
      Begin VB.Image Image1 
         Height          =   1680
         Index           =   2
         Left            =   4680
         Picture         =   "Form4.frx":248108
         Stretch         =   -1  'True
         Top             =   1680
         Width           =   1680
      End
      Begin VB.Image Image1 
         Height          =   1920
         Index           =   1
         Left            =   2640
         Picture         =   "Form4.frx":24B2B7
         Stretch         =   -1  'True
         Top             =   1440
         Width           =   1680
      End
      Begin VB.Image Image1 
         Height          =   1680
         Index           =   0
         Left            =   720
         Picture         =   "Form4.frx":24EA0C
         Stretch         =   -1  'True
         Top             =   1680
         Width           =   1680
      End
      Begin VB.Image Image1 
         Height          =   1680
         Index           =   4
         Left            =   8640
         Picture         =   "Form4.frx":252FD6
         Stretch         =   -1  'True
         Top             =   1680
         Width           =   1680
      End
      Begin VB.Label Label1 
         Alignment       =   2  'Center
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "Log-off"
         BeginProperty Font 
            Name            =   "Gabriola"
            Size            =   15.75
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   585
         Index           =   4
         Left            =   8820
         TabIndex        =   9
         Top             =   3360
         Width           =   705
      End
      Begin VB.Label Label1 
         Alignment       =   2  'Center
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "Delivery "
         BeginProperty Font 
            Name            =   "Gabriola"
            Size            =   15.75
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   585
         Index           =   3
         Left            =   6705
         TabIndex        =   8
         Top             =   3360
         Width           =   855
      End
      Begin VB.Label Label1 
         Alignment       =   2  'Center
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "Service"
         BeginProperty Font 
            Name            =   "Gabriola"
            Size            =   15.75
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   585
         Index           =   2
         Left            =   4815
         TabIndex        =   7
         Top             =   3360
         Width           =   645
      End
      Begin VB.Label Label1 
         Alignment       =   2  'Center
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "Report"
         BeginProperty Font 
            Name            =   "Gabriola"
            Size            =   15.75
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   585
         Index           =   1
         Left            =   2790
         TabIndex        =   6
         Top             =   3360
         Width           =   675
      End
      Begin VB.Label Label1 
         Alignment       =   2  'Center
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "User"
         BeginProperty Font 
            Name            =   "Gabriola"
            Size            =   15.75
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   585
         Index           =   0
         Left            =   840
         TabIndex        =   5
         Top             =   3360
         Width           =   465
      End
   End
   Begin VB.Timer Timer2 
      Interval        =   50
      Left            =   8880
      Top             =   0
   End
   Begin VB.Timer Timer1 
      Interval        =   1000
      Left            =   1560
      Top             =   360
   End
   Begin VB.Label Label4 
      BackColor       =   &H00000000&
      Caption         =   "Label4"
      Height          =   1215
      Left            =   5640
      TabIndex        =   3
      Top             =   1680
      Width           =   3015
   End
   Begin VB.Label Label3 
      BackStyle       =   0  'Transparent
      Height          =   255
      Left            =   20280
      TabIndex        =   2
      Top             =   0
      Width           =   255
   End
   Begin VB.Label Label2 
      BackStyle       =   0  'Transparent
      Caption         =   "Label2"
      Height          =   1695
      Left            =   -2520
      TabIndex        =   1
      Top             =   -1440
      Width           =   2775
   End
   Begin WMPLibCtl.WindowsMediaPlayer WindowsMediaPlayer1 
      Height          =   2655
      Left            =   5640
      TabIndex        =   0
      Top             =   0
      Width           =   3015
      URL             =   ""
      rate            =   1
      balance         =   0
      currentPosition =   0
      defaultFrame    =   ""
      playCount       =   1
      autoStart       =   -1  'True
      currentMarker   =   0
      invokeURLs      =   -1  'True
      baseURL         =   ""
      volume          =   50
      mute            =   0   'False
      uiMode          =   "full"
      stretchToFit    =   0   'False
      windowlessVideo =   0   'False
      enabled         =   -1  'True
      enableContextMenu=   -1  'True
      fullScreen      =   0   'False
      SAMIStyle       =   ""
      SAMILang        =   ""
      SAMIFilename    =   ""
      captioningID    =   ""
      enableErrorDialogs=   0   'False
      _cx             =   5318
      _cy             =   4683
   End
End
Attribute VB_Name = "Form4"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Dim m
Dim tim0 As Integer
Dim cnt As Integer
Dim ind As Integer







Private Sub bar3lbl1_Click(Index As Integer)
bar3lblno = bar3lbl1(Index).Index
Form11.Visible = True
Form4.Hide
End Sub

Private Sub bar3lbl1_MouseMove(Index As Integer, Button As Integer, Shift As Integer, x As Single, Y As Single)
bar3lbl1(Index).ForeColor = 16776960
End Sub

Private Sub Form_DblClick()
Unload Me
Form2.Visible = True
End Sub
Private Sub Act()
connect
'm = msgbox1(Nooforders, vbOKOnly, "NUMBER OF ORDERS RECIVED")
If rec.State = 1 Then
rec.Close
End If
rec.open "select class_name from class", con, adOpenKeyset, adLockOptimistic
For t = 0 To 12
If rec.EOF <> True Then
cnt = cnt + 1
bar3lbl1(t).Caption = rec.Fields(0)
rec.MoveNext
End If
Next

rec.Close
End Sub

Private Sub Form_Load()
cnt = 0
Act
Load Form11
Me.WindowState = 2
regpic.Visible = False
vbar.Visible = False
WindowsMediaPlayer1.settings.mute = True
WindowsMediaPlayer1.URL = "E:\WORKstation\project\LOADING\videos\m.mp4"
tim0 = 0

If rec2.State = 1 Then
rec2.Close
End If
rec2.open "select * from booking where date_of_delivery ='" & DateTime.Date & "' and status = 'ON'", con, adOpenKeyset, adLockOptimistic
Label5.Caption = rec2.RecordCount
For t = 0 To 4
Image1(t).Visible = False
Next
For t = 0 To 4
Label1(t).Visible = False
Next
Label5.Visible = False
End Sub



Private Sub Form_MouseMove(Button As Integer, Shift As Integer, x As Single, Y As Single)
If regpic.Visible = True Then
regpic.Visible = False
regpictbllblcolour
Timer1.Enabled = True
WindowsMediaPlayer1.Visible = True
WindowsMediaPlayer1.URL = "E:\WORKstation\project\LOADING\videos\m.mp4"
End If
If vbar.Visible = True Then
vbar.Visible = False
End If

End Sub

Private Sub backward_click()

o = cnt Mod 13
If rec.State = 1 Then
rec.Close
End If
rec.open "select * from class", con, adOpenKeyset, adLockOptimistic
For r = 1 To cnt
rec.MoveNext
Next

If (o > 0) Then
For r = 1 To o + 1
rec.MovePrevious
Next
ElseIf cnt <> 13 And o = 0 Then
For r = 1 To 13 + 1
rec.MovePrevious
Next
Else
GoTo Label1
End If
cnt = cnt - (r - 2)

For t = 12 To 0 Step -1
If rec.BOF <> True Then
bar3lbl1(t).Caption = rec.Fields(1)
rec.MovePrevious
Else
GoTo Label2
End If
Next
Label2:
Label1:

rec.Close
End Sub

Private Sub forward_Click()
If rec.State = 1 Then
rec.Close
End If

rec.open "select class_name from class", con, adOpenKeyset, adLockOptimistic
For i = 1 To cnt
rec.MoveNext
Next

If rec.EOF <> True Then
For t = 0 To 12
bar3lbl1(t).Caption = ""
Next
End If


For t = 0 To 12
If rec.EOF <> True Then
bar3lbl1(t).Caption = rec.Fields(0)
rec.MoveNext
cnt = cnt + 1
Else
GoTo Label2
End If
Next
Label2:
Label1:
rec.Close
End Sub

Private Sub Labe5_Click()

End Sub

Private Sub Label1_Click(Index As Integer)
If ind = 4 Then
'Y = msgbox1("Do You Wish To Close?")
'If Y = 1 Then
End
'End If
ElseIf ind = 0 Then
Form22.Show vbModal
ElseIf ind = 1 Then
Form14.Show
Form15.Show
Me.Hide
ElseIf ind = 2 Then
Unload Form2
Unload Me
a1.Show
ElseIf ind = 3 Then
If Label5.Caption <> 0 Then
form6.Visible = True
Else
msgbox1 ("No delivery for today")
End If
End If
Label1(ind).FontSize = 16
Image1(ind).Visible = False
Label5.Visible = False
Label1(ind).ForeColor = vbWhite
End Sub

Private Sub Label1_MouseMove(Index As Integer, Button As Integer, Shift As Integer, x As Single, Y As Single)
ind = Label1(Index).Index
Label1(ind).FontSize = 38
Image1(ind).Visible = True
Label1(ind).ForeColor = 16776960
For t = 0 To 4
If t <> ind Then
Label1(t).FontSize = 16
Label1(t).ForeColor = vbWhite
End If
Next
If ind = 3 Then
Label5.Visible = True
Else
Label5.Visible = False
End If
End Sub

Private Sub Label2_MouseMove(Button As Integer, Shift As Integer, x As Single, Y As Single)
regpic.Visible = True
WindowsMediaPlayer1.URL = ""
Timer1.Enabled = False
WindowsMediaPlayer1.Visible = False
End Sub

Private Sub Label3_MouseMove(Button As Integer, Shift As Integer, x As Single, Y As Single)
vbar.Visible = True
End Sub




Private Sub Picture11_Click()
For t = 0 To 4
Label1(t).Visible = True
Next
End Sub

Private Sub Picture11_DblClick()
For t = 0 To 4
Label1(t).Visible = False
Next
End Sub

Private Sub Picture11_MouseMove(Button As Integer, Shift As Integer, x As Single, Y As Single)
If Label1(ind).FontSize > 16 Then
For t = 0 To 4
Label1(t).FontSize = 16
Label1(t).ForeColor = vbWhite
Image1(t).Visible = False
Next
Label5.Visible = False
End If
regpic.Visible = False
End Sub

Private Sub regpic_DblClick()
regpic.Width = 9015
End Sub

Private Sub regpic_MouseMove(Button As Integer, Shift As Integer, x As Single, Y As Single)
regpictbllblcolour
End Sub

Private Sub tbllbl1_Click(Index As Integer)
tblno = tbllbl1(Index).Index
If rec.State = 1 Then
rec.Close
End If
rec.open "select * from " & tbllbl1(tblno).Caption, con, adOpenKeyset, adLockOptimistic
Set Form10.DataGrid1.DataSource = rec
For k = 0 To rec.Fields.Count - 1
Form10.Check1(k).Caption = UCase(rec.Fields(k).Name)
Next
If tbllbl1(tblno).Caption = "BOOKING" Or tbllbl1(tblno).Caption = "DELIVERY" Or tbllbl1(tblno).Caption = "CUSTOMER" Then
Form10.Command2.Enabled = False
End If
Form10.Visible = True
End Sub

Private Sub tbllbl1_MouseMove(Index As Integer, Button As Integer, Shift As Integer, x As Single, Y As Single)
temp = tbllbl1(Index).Index
tbllbl1(temp).ForeColor = 16776960
lblcolouroff (temp)
End Sub

Private Sub Timer1_Timer()
tim0 = tim0 + 1
If tim0 = 5 Then
WindowsMediaPlayer1.URL = "E:\WORKstation\project\LOADING\videos\m.mp4"
tim0 = 0
End If
End Sub


Private Sub Timer2_Timer()
If WindowsMediaPlayer1.fullScreen = True Then
WindowsMediaPlayer1.fullScreen = False
End If
End Sub

Private Sub vbar_MouseMove(Button As Integer, Shift As Integer, x As Single, Y As Single)
colouroffbar
End Sub


