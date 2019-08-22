VERSION 5.00
Object = "{6BF52A50-394A-11D3-B153-00C04F79FAA6}#1.0#0"; "wmp.dll"
Begin VB.Form Form3 
   BackColor       =   &H00000000&
   BorderStyle     =   3  'Fixed Dialog
   ClientHeight    =   11280
   ClientLeft      =   45
   ClientTop       =   45
   ClientWidth     =   20055
   ControlBox      =   0   'False
   ForeColor       =   &H00FFFFFF&
   LinkTopic       =   "Form3"
   MaxButton       =   0   'False
   MinButton       =   0   'False
   Moveable        =   0   'False
   ScaleHeight     =   11280
   ScaleWidth      =   20055
   ShowInTaskbar   =   0   'False
   Begin VB.Timer Timer5 
      Interval        =   350
      Left            =   11640
      Top             =   1440
   End
   Begin VB.Timer Timer4 
      Interval        =   1000
      Left            =   10800
      Top             =   720
   End
   Begin VB.Timer Timer3 
      Interval        =   90
      Left            =   9480
      Top             =   840
   End
   Begin VB.CommandButton Command1 
      Default         =   -1  'True
      Height          =   735
      Left            =   10080
      Picture         =   "Form3.frx":0000
      Style           =   1  'Graphical
      TabIndex        =   3
      Top             =   8760
      Width           =   735
   End
   Begin VB.TextBox password 
      Alignment       =   2  'Center
      Appearance      =   0  'Flat
      BackColor       =   &H00000000&
      BorderStyle     =   0  'None
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   18
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   525
      IMEMode         =   3  'DISABLE
      Left            =   11880
      PasswordChar    =   "*"
      TabIndex        =   2
      Top             =   7680
      Width           =   4935
   End
   Begin VB.TextBox userid 
      Alignment       =   2  'Center
      Appearance      =   0  'Flat
      BackColor       =   &H00000000&
      BorderStyle     =   0  'None
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
      Height          =   525
      IMEMode         =   3  'DISABLE
      Left            =   3600
      TabIndex        =   1
      Top             =   7680
      Width           =   4935
   End
   Begin VB.Frame frame1 
      Appearance      =   0  'Flat
      BackColor       =   &H00000000&
      BorderStyle     =   0  'None
      Caption         =   "Frame1"
      ForeColor       =   &H80000008&
      Height          =   615
      Left            =   4680
      TabIndex        =   0
      Top             =   4440
      Width           =   15
      Begin VB.Shape Shape1 
         BackColor       =   &H00FFFF00&
         BorderColor     =   &H00FFFF00&
         BorderStyle     =   6  'Inside Solid
         BorderWidth     =   4
         FillColor       =   &H00FFFFC0&
         FillStyle       =   0  'Solid
         Height          =   615
         Index           =   23
         Left            =   6840
         Top             =   0
         Width           =   300
      End
      Begin VB.Shape Shape1 
         BackColor       =   &H00FFFF00&
         BorderColor     =   &H00FFFF00&
         BorderStyle     =   6  'Inside Solid
         BorderWidth     =   4
         FillColor       =   &H00FFFFC0&
         FillStyle       =   0  'Solid
         Height          =   615
         Index           =   22
         Left            =   7200
         Top             =   0
         Width           =   300
      End
      Begin VB.Shape Shape1 
         BackColor       =   &H00FFFF00&
         BorderColor     =   &H00FFFF00&
         BorderStyle     =   6  'Inside Solid
         BorderWidth     =   4
         FillColor       =   &H00FFFFC0&
         FillStyle       =   0  'Solid
         Height          =   615
         Index           =   21
         Left            =   7560
         Top             =   0
         Width           =   300
      End
      Begin VB.Shape Shape1 
         BackColor       =   &H00FFFF00&
         BorderColor     =   &H00FFFF00&
         BorderStyle     =   6  'Inside Solid
         BorderWidth     =   4
         FillColor       =   &H00FFFFC0&
         FillStyle       =   0  'Solid
         Height          =   615
         Index           =   20
         Left            =   7920
         Top             =   0
         Width           =   300
      End
      Begin VB.Shape Shape1 
         BackColor       =   &H00FFFF00&
         BorderColor     =   &H00FFFF00&
         BorderStyle     =   6  'Inside Solid
         BorderWidth     =   4
         FillColor       =   &H00FFFFC0&
         FillStyle       =   0  'Solid
         Height          =   615
         Index           =   19
         Left            =   8280
         Top             =   0
         Width           =   300
      End
      Begin VB.Shape Shape1 
         BackColor       =   &H00FFFF00&
         BorderColor     =   &H00FFFF00&
         BorderStyle     =   6  'Inside Solid
         BorderWidth     =   4
         FillColor       =   &H00FFFFC0&
         FillStyle       =   0  'Solid
         Height          =   615
         Index           =   18
         Left            =   6480
         Top             =   0
         Width           =   300
      End
      Begin VB.Shape Shape1 
         BackColor       =   &H00FFFF00&
         BorderColor     =   &H00FFFF00&
         BorderStyle     =   6  'Inside Solid
         BorderWidth     =   4
         FillColor       =   &H00FFFFC0&
         FillStyle       =   0  'Solid
         Height          =   615
         Index           =   17
         Left            =   4680
         Top             =   0
         Width           =   300
      End
      Begin VB.Shape Shape1 
         BackColor       =   &H00FFFF00&
         BorderColor     =   &H00FFFF00&
         BorderStyle     =   6  'Inside Solid
         BorderWidth     =   4
         FillColor       =   &H00FFFFC0&
         FillStyle       =   0  'Solid
         Height          =   615
         Index           =   16
         Left            =   5040
         Top             =   0
         Width           =   300
      End
      Begin VB.Shape Shape1 
         BackColor       =   &H00FFFF00&
         BorderColor     =   &H00FFFF00&
         BorderStyle     =   6  'Inside Solid
         BorderWidth     =   4
         FillColor       =   &H00FFFFC0&
         FillStyle       =   0  'Solid
         Height          =   615
         Index           =   15
         Left            =   5400
         Top             =   0
         Width           =   300
      End
      Begin VB.Shape Shape1 
         BackColor       =   &H00FFFF00&
         BorderColor     =   &H00FFFF00&
         BorderStyle     =   6  'Inside Solid
         BorderWidth     =   4
         FillColor       =   &H00FFFFC0&
         FillStyle       =   0  'Solid
         Height          =   615
         Index           =   14
         Left            =   5760
         Top             =   0
         Width           =   300
      End
      Begin VB.Shape Shape1 
         BackColor       =   &H00FFFF00&
         BorderColor     =   &H00FFFF00&
         BorderStyle     =   6  'Inside Solid
         BorderWidth     =   4
         FillColor       =   &H00FFFFC0&
         FillStyle       =   0  'Solid
         Height          =   615
         Index           =   13
         Left            =   6120
         Top             =   0
         Width           =   300
      End
      Begin VB.Shape Shape1 
         BackColor       =   &H00FFFF00&
         BorderColor     =   &H00FFFF00&
         BorderStyle     =   6  'Inside Solid
         BorderWidth     =   4
         FillColor       =   &H00FFFFC0&
         FillStyle       =   0  'Solid
         Height          =   615
         Index           =   12
         Left            =   4320
         Top             =   0
         Width           =   300
      End
      Begin VB.Shape Shape1 
         BackColor       =   &H00FFFF00&
         BorderColor     =   &H00FFFF00&
         BorderStyle     =   6  'Inside Solid
         BorderWidth     =   4
         FillColor       =   &H00FFFFC0&
         FillStyle       =   0  'Solid
         Height          =   615
         Index           =   6
         Left            =   2520
         Top             =   0
         Width           =   300
      End
      Begin VB.Shape Shape1 
         BackColor       =   &H00FFFF00&
         BorderColor     =   &H00FFFF00&
         BorderStyle     =   6  'Inside Solid
         BorderWidth     =   4
         FillColor       =   &H00FFFFC0&
         FillStyle       =   0  'Solid
         Height          =   615
         Index           =   5
         Left            =   2880
         Top             =   0
         Width           =   300
      End
      Begin VB.Shape Shape1 
         BackColor       =   &H00FFFF00&
         BorderColor     =   &H00FFFF00&
         BorderStyle     =   6  'Inside Solid
         BorderWidth     =   4
         FillColor       =   &H00FFFFC0&
         FillStyle       =   0  'Solid
         Height          =   615
         Index           =   4
         Left            =   3240
         Top             =   0
         Width           =   300
      End
      Begin VB.Shape Shape1 
         BackColor       =   &H00FFFF00&
         BorderColor     =   &H00FFFF00&
         BorderStyle     =   6  'Inside Solid
         BorderWidth     =   4
         FillColor       =   &H00FFFFC0&
         FillStyle       =   0  'Solid
         Height          =   615
         Index           =   3
         Left            =   3600
         Top             =   0
         Width           =   300
      End
      Begin VB.Shape Shape1 
         BackColor       =   &H00FFFF00&
         BorderColor     =   &H00FFFF00&
         BorderStyle     =   6  'Inside Solid
         BorderWidth     =   4
         FillColor       =   &H00FFFFC0&
         FillStyle       =   0  'Solid
         Height          =   615
         Index           =   2
         Left            =   3960
         Top             =   0
         Width           =   300
      End
      Begin VB.Shape Shape1 
         BackColor       =   &H00FFFF00&
         BorderColor     =   &H00FFFF00&
         BorderStyle     =   6  'Inside Solid
         BorderWidth     =   4
         FillColor       =   &H00FFFFC0&
         FillStyle       =   0  'Solid
         Height          =   615
         Index           =   1
         Left            =   2160
         Top             =   0
         Width           =   300
      End
      Begin VB.Shape Shape1 
         BackColor       =   &H00FFFF00&
         BorderColor     =   &H00FFFF00&
         BorderStyle     =   6  'Inside Solid
         BorderWidth     =   4
         FillColor       =   &H00FFFFC0&
         FillStyle       =   0  'Solid
         Height          =   615
         Index           =   11
         Left            =   360
         Top             =   0
         Width           =   300
      End
      Begin VB.Shape Shape1 
         BackColor       =   &H00FFFF00&
         BorderColor     =   &H00FFFF00&
         BorderStyle     =   6  'Inside Solid
         BorderWidth     =   4
         FillColor       =   &H00FFFFC0&
         FillStyle       =   0  'Solid
         Height          =   615
         Index           =   10
         Left            =   720
         Top             =   0
         Width           =   300
      End
      Begin VB.Shape Shape1 
         BackColor       =   &H00FFFF00&
         BorderColor     =   &H00FFFF00&
         BorderStyle     =   6  'Inside Solid
         BorderWidth     =   4
         FillColor       =   &H00FFFFC0&
         FillStyle       =   0  'Solid
         Height          =   615
         Index           =   9
         Left            =   1080
         Top             =   0
         Width           =   300
      End
      Begin VB.Shape Shape1 
         BackColor       =   &H00FFFF00&
         BorderColor     =   &H00FFFF00&
         BorderStyle     =   6  'Inside Solid
         BorderWidth     =   4
         FillColor       =   &H00FFFFC0&
         FillStyle       =   0  'Solid
         Height          =   615
         Index           =   8
         Left            =   1440
         Top             =   0
         Width           =   300
      End
      Begin VB.Shape Shape1 
         BackColor       =   &H00FFFF00&
         BorderColor     =   &H00FFFF00&
         BorderStyle     =   6  'Inside Solid
         BorderWidth     =   4
         FillColor       =   &H00FFFFC0&
         FillStyle       =   0  'Solid
         Height          =   615
         Index           =   7
         Left            =   1800
         Top             =   0
         Width           =   300
      End
      Begin VB.Shape Shape1 
         BackColor       =   &H00000000&
         BorderColor     =   &H00000000&
         BorderStyle     =   6  'Inside Solid
         BorderWidth     =   4
         FillStyle       =   0  'Solid
         Height          =   615
         Index           =   0
         Left            =   0
         Top             =   0
         Width           =   300
      End
   End
   Begin VB.Timer Timer2 
      Enabled         =   0   'False
      Interval        =   90
      Left            =   8880
      Top             =   1560
   End
   Begin VB.Timer Timer1 
      Enabled         =   0   'False
      Interval        =   90
      Left            =   7440
      Top             =   1080
   End
   Begin VB.Line Line24 
      BorderColor     =   &H00808000&
      X1              =   0
      X2              =   4200
      Y1              =   3120
      Y2              =   3120
   End
   Begin VB.Label Label2 
      Appearance      =   0  'Flat
      BackColor       =   &H00000000&
      BackStyle       =   0  'Transparent
      Caption         =   "Mercedes - Benz"
      BeginProperty Font 
         Name            =   "Gabriola"
         Size            =   36
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   1095
      Left            =   2520
      TabIndex        =   7
      Top             =   720
      Width           =   5655
   End
   Begin VB.Image Image1 
      Height          =   1830
      Left            =   480
      Picture         =   "Form3.frx":0895
      Top             =   480
      Width           =   1845
   End
   Begin VB.Line Line23 
      BorderColor     =   &H00808000&
      X1              =   4200
      X2              =   5280
      Y1              =   3120
      Y2              =   3720
   End
   Begin VB.Line Line2 
      BorderColor     =   &H00808000&
      X1              =   5280
      X2              =   6600
      Y1              =   3720
      Y2              =   3720
   End
   Begin VB.Line Line8 
      BorderColor     =   &H00808000&
      X1              =   360
      X2              =   5040
      Y1              =   3720
      Y2              =   3720
   End
   Begin VB.Label Label1 
      Appearance      =   0  'Flat
      BackColor       =   &H00000000&
      BackStyle       =   0  'Transparent
      Caption         =   "ADMIN LOGIN......."
      BeginProperty Font 
         Name            =   "Times New Roman"
         Size            =   14.25
         Charset         =   0
         Weight          =   700
         Underline       =   0   'False
         Italic          =   -1  'True
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00808000&
      Height          =   615
      Left            =   600
      TabIndex        =   6
      Top             =   3360
      Width           =   3615
   End
   Begin VB.Line Line18 
      BorderColor     =   &H00808000&
      X1              =   120
      X2              =   4320
      Y1              =   5520
      Y2              =   5520
   End
   Begin VB.Shape Shape2 
      BackColor       =   &H00FFFF00&
      BackStyle       =   1  'Opaque
      BorderColor     =   &H00FFFF00&
      BorderWidth     =   4
      DrawMode        =   15  'Merge Pen Not
      FillColor       =   &H00FFFF80&
      FillStyle       =   0  'Solid
      Height          =   495
      Left            =   7800
      Top             =   3480
      Width           =   135
   End
   Begin WMPLibCtl.WindowsMediaPlayer WindowsMediaPlayer1 
      Height          =   135
      Left            =   10320
      TabIndex        =   5
      Top             =   9000
      Width           =   255
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
      _cx             =   450
      _cy             =   238
   End
   Begin VB.Line Line28 
      BorderColor     =   &H00808000&
      Index           =   3
      X1              =   3600
      X2              =   8520
      Y1              =   7560
      Y2              =   7560
   End
   Begin VB.Label Label3 
      Appearance      =   0  'Flat
      AutoSize        =   -1  'True
      BackColor       =   &H00000000&
      BackStyle       =   0  'Transparent
      BeginProperty Font 
         Name            =   "Copperplate Gothic Bold"
         Size            =   14.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFC0&
      Height          =   315
      Left            =   7680
      TabIndex        =   4
      Top             =   3600
      Width           =   4680
   End
   Begin VB.Line Line7 
      BorderColor     =   &H00808000&
      Index           =   0
      X1              =   7680
      X2              =   12600
      Y1              =   3360
      Y2              =   3360
   End
   Begin VB.Line Line28 
      BorderColor     =   &H00808000&
      Index           =   2
      X1              =   11880
      X2              =   16800
      Y1              =   8280
      Y2              =   8280
   End
   Begin VB.Line Line27 
      BorderColor     =   &H00808000&
      Index           =   2
      X1              =   11880
      X2              =   16800
      Y1              =   7560
      Y2              =   7560
   End
   Begin VB.Line Line15 
      BorderColor     =   &H00808000&
      Index           =   2
      X1              =   16800
      X2              =   17520
      Y1              =   8280
      Y2              =   7920
   End
   Begin VB.Line Line14 
      BorderColor     =   &H00808000&
      Index           =   2
      X1              =   11160
      X2              =   11880
      Y1              =   7920
      Y2              =   8280
   End
   Begin VB.Line Line13 
      BorderColor     =   &H00808000&
      Index           =   2
      X1              =   16800
      X2              =   17520
      Y1              =   7560
      Y2              =   7920
   End
   Begin VB.Line Line9 
      BorderColor     =   &H00808000&
      Index           =   2
      X1              =   11160
      X2              =   11880
      Y1              =   7920
      Y2              =   7560
   End
   Begin VB.Line Line28 
      BorderColor     =   &H00808000&
      Index           =   1
      X1              =   3600
      X2              =   8520
      Y1              =   8280
      Y2              =   8280
   End
   Begin VB.Line Line15 
      BorderColor     =   &H00808000&
      Index           =   1
      X1              =   8520
      X2              =   9240
      Y1              =   8280
      Y2              =   7920
   End
   Begin VB.Line Line14 
      BorderColor     =   &H00808000&
      Index           =   1
      X1              =   2880
      X2              =   3600
      Y1              =   7920
      Y2              =   8280
   End
   Begin VB.Line Line13 
      BorderColor     =   &H00808000&
      Index           =   1
      X1              =   8520
      X2              =   9240
      Y1              =   7560
      Y2              =   7920
   End
   Begin VB.Line Line9 
      BorderColor     =   &H00808000&
      Index           =   1
      X1              =   2880
      X2              =   3600
      Y1              =   7920
      Y2              =   7560
   End
   Begin VB.Line Line5 
      BorderColor     =   &H00808000&
      X1              =   13560
      X2              =   15240
      Y1              =   3720
      Y2              =   3720
   End
   Begin VB.Line Line6 
      BorderColor     =   &H00808000&
      X1              =   7680
      X2              =   12600
      Y1              =   4200
      Y2              =   4200
   End
   Begin VB.Line Line9 
      BorderColor     =   &H00808000&
      Index           =   0
      X1              =   6600
      X2              =   7680
      Y1              =   3720
      Y2              =   3240
   End
   Begin VB.Line Line13 
      BorderColor     =   &H00808000&
      Index           =   0
      X1              =   12600
      X2              =   13560
      Y1              =   3240
      Y2              =   3720
   End
   Begin VB.Line Line14 
      BorderColor     =   &H00808000&
      Index           =   0
      X1              =   6600
      X2              =   7680
      Y1              =   3720
      Y2              =   4200
   End
   Begin VB.Line Line15 
      BorderColor     =   &H00808000&
      Index           =   0
      X1              =   12600
      X2              =   13560
      Y1              =   4200
      Y2              =   3720
   End
   Begin VB.Line Line12 
      BorderColor     =   &H00808000&
      X1              =   16320
      X2              =   21240
      Y1              =   3120
      Y2              =   3120
   End
   Begin VB.Line Line17 
      BorderColor     =   &H00808000&
      X1              =   14280
      X2              =   19200
      Y1              =   3720
      Y2              =   3720
   End
   Begin VB.Line Line3 
      BorderColor     =   &H00808000&
      X1              =   4920
      X2              =   9120
      Y1              =   5160
      Y2              =   5160
   End
   Begin VB.Line Line4 
      BorderColor     =   &H00808000&
      X1              =   4320
      X2              =   4920
      Y1              =   5520
      Y2              =   5160
   End
   Begin VB.Line Line19 
      BorderColor     =   &H00808000&
      X1              =   9120
      X2              =   10200
      Y1              =   5160
      Y2              =   4560
   End
   Begin VB.Line Line20 
      BorderColor     =   &H00808000&
      X1              =   10200
      X2              =   15120
      Y1              =   4560
      Y2              =   4560
   End
   Begin VB.Line Line21 
      BorderColor     =   &H00808000&
      X1              =   15120
      X2              =   16200
      Y1              =   4560
      Y2              =   5160
   End
   Begin VB.Line Line22 
      BorderColor     =   &H00808000&
      X1              =   16200
      X2              =   21120
      Y1              =   5160
      Y2              =   5160
   End
   Begin VB.Line Line16 
      BorderColor     =   &H00808000&
      X1              =   15240
      X2              =   16320
      Y1              =   3720
      Y2              =   3120
   End
   Begin VB.Line Line27 
      BorderColor     =   &H00808000&
      Index           =   0
      X1              =   7680
      X2              =   12600
      Y1              =   3240
      Y2              =   3240
   End
   Begin VB.Line Line28 
      BorderColor     =   &H00808000&
      Index           =   0
      X1              =   7680
      X2              =   12600
      Y1              =   4080
      Y2              =   4080
   End
End
Attribute VB_Name = "Form3"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Dim tim As Integer
Dim tim2 As Integer
Dim tim0 As Integer
Dim tim3 As Integer
Dim tim5 As Integer
Dim tim6 As Integer
Private Sub Form_DblClick()
Unload Me
Form2.Visible = True
End Sub


Private Sub Form_Load()
WindowsMediaPlayer1.URL = "E:\WORKstation\project\LOADING\sound\s0.mp3"
Me.WindowState = 2
Shape2.Visible = False
Timer3.Enabled = False
tim0 = 0
tim = 0
tim2 = 0
tim3 = 0
tim5 = 0
tim6 = 0
End Sub

Private Sub Command1_Click()
If rec.State = 1 Then
rec.Close
End If
rec.open "select * from pass where userid  ='" & userid & "'", con, adOpenKeyset, adLockOptimistic
If rec.RecordCount > 0 Then
Dim s1 As String, s2 As String
s1 = Trim(rec.Fields(1))
s2 = Trim(password)
If s1 = s2 Then
End If
If s1 = s2 Then
user = userid.Text
pa = password.Text
rec.Close
Command1.Enabled = False
Timer4.Enabled = False
WindowsMediaPlayer1.URL = "E:\WORKstation\project\LOADING\sound\s1.mp3"
Shape2.Visible = True
Timer3.Enabled = True
tim2 = 1
Timer2.Enabled = True
Else
password.Text = ""
tim2 = 4
WindowsMediaPlayer1.URL = "E:\WORKstation\project\LOADING\sound\s2.mp3"
Timer2.Enabled = True
rec.Close
End If
Else
userid.Text = ""
password.Text = ""
tim2 = 4
WindowsMediaPlayer1.URL = "E:\WORKstation\project\LOADING\sound\s2.mp3"
Timer2.Enabled = True
rec.Close
End If
'Unload Me
End Sub

Private Sub Label1_DblClick()
Unload Me
End Sub

Private Sub Text1_DblClick()
Unload Me
End Sub

Private Sub Timer1_Timer()

tim = tim + 1
tim0 = tim0 + 1

If tim = 1 Then
Line3.X2 = Line3.X2 + 40
Line19.X1 = Line19.X1 + 40
Line19.X2 = Line19.X2 + 40

Line20.X1 = Line20.X1 + 40
Line20.X2 = Line20.X2 + 40

Line21.X1 = Line21.X1 + 40
Line21.X2 = Line21.X2 + 40

Line22.X1 = Line22.X1 + 40
Line22.X2 = Line22.X2 + 40

Frame1.Width = Frame1.Width + 89

If Line3.X2 <> 12560 Then
tim = 0
Else
GoTo dd
End If
dd:
End If



If tim0 = 105 Then
Label3.Caption = ""
tim3 = 0
Shape2.Left = 7800
tim2 = 3
WindowsMediaPlayer1.URL = "E:\WORKstation\project\LOADING\sound\s3.mp3"
Timer2.Enabled = True
End If

End Sub

Private Sub Timer2_Timer()
Dim temp2 As Integer
Dim cap As String
tim3 = tim3 + 1
If tim2 = 1 Then
cap = "AUTHORITY ACCESSED...."
Timer2.Interval = 90
Timer3.Interval = 90
temp2 = 200
ElseIf tim2 = 2 Then
Timer2.Interval = 300
Timer3.Interval = 300
temp2 = 200
cap = "LOADING...."
ElseIf tim2 = 3 Then
Timer2.Interval = 200
Timer3.Interval = 200
temp2 = 180
cap = "INITIATING ADMINISTRATOR...."
ElseIf tim2 = 4 Then
Timer2.Interval = 90
Timer3.Interval = 90
temp2 = 200
cap = "ACCESS DENIED...."
End If


St = Mid(cap, tim3, 1)
Label3.Caption = Label3.Caption & St

If tim3 < Len(cap) - 1 Then
Shape2.Left = Shape2.Left + temp2
End If

If tim3 = Len(cap) + 5 And tim2 = 1 Then
Timer1.Enabled = True
Shape2.Left = 7800
tim2 = 2
tim3 = 0
Label3.Caption = ""
End If


If tim3 = Len(cap) + 5 And tim2 = 4 Then
Shape2.Left = 7800
Timer2.Enabled = False
tim3 = 0
Label3.Caption = ""
End If


If tim3 = Len(cap) + 5 And tim2 = 2 Then
Timer1.Enabled = True
Shape2.Left = 7800
tim3 = 0
Label3.Caption = ""
End If

If tim3 = Len(cap) + 10 And tim2 = 3 Then
Timer1.Enabled = True
Timer2.Enabled = False
tim3 = 0
Label3.Caption = ""
Command1.Enabled = True
Unload Me
Form4.Show
End If
End Sub

Private Sub Timer3_Timer()
tim5 = tim5 + 1
If tim5 = 1 Then
Shape2.Visible = True
Else
Shape2.Visible = False
tim5 = 0
End If
End Sub

Private Sub Timer4_Timer()
tim6 = tim6 + 1
If tim6 = 55 Then
Unload Me
Form2.Visible = True
End If
End Sub

