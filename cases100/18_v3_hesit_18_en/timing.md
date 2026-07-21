# v3_hesit_18_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_hesit_18",
#     "name": "Bruno",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-13",
#       "category": "commute",
#       "text": "User walks 20 minutes to the office."
#     },
#     {
#       "date": "2026-05-12",
#       "category": "emergency",
#       "text": "User's emergency contact is Tobias."
#     },
#     {
#       "date": "2026-05-08",
#       "category": "wake",
#       "text": "User usually wakes up at 5:30am for a run."
#     },
#     {
#       "date": "2026-05-05",
#       "category": "pet",
#       "text": "User has a Ragdoll cat named Miso."
#     },
#     {
#       "date": "2026-03-30",
#       "category": "work",
#       "text": "User works as a paramedic."
#     },
#     {
#       "date": "2025-12-12",
#       "category": "bloodtype",
#       "text": "User's blood type is O-."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-09",
#       "title": "Learning to invest",
#       "bullets": [
#         "asked about index funds vs individual stocks",
#         "wants to start with 500k won a month"
#       ]
#     },
#     {
#       "date": "2026-04-21",
#       "title": "Choosing a preschool",
#       "bullets": [
#         "wants one within walking distance",
#         "asked about hours and monthly fees"
#       ]
#     },
#     {
#       "date": "2026-04-13",
#       "title": "Buying a gift for a parent",
#       "bullets": [
#         "mom's 60th birthday next month",
#         "considering a spa day or a watch"
#       ]
#     },
#     {
#       "date": "2026-03-03",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building under 900k won/month",
#         "needed parking and a second bedroom near line 2"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: I’m just… well, trying to figure out who decides what plays 
     2.91s  agent 발화 시작: Right.
     3.50s  agent 발화 끝
     5.95s  <ret> 발화 (turn2 첫 프레임)
     6.39s  user  발화 끝
     6.50s  agent 발화 시작: <ret> It often falls to the theatre director—they’re usually
     7.77s  ⚡SPAN 주입 [d'=1.82s / d_lead=5.98s]: The theatre director is typically responsible for selecting the plays 
    12.45s  user  발화 시작: Oh, okay. So it's not, like, a committee?
    12.47s  agent 발화 끝
    14.10s  agent 발화 시작: Uh-huh.
    14.67s  agent 발화 끝
    16.28s  user  발화 끝
    16.40s  agent 발화 시작: [happy] Not usually, though committees *can* offer input, th
    18.81s  user  발화 시작: Yeah.
    19.44s  user  발화 끝
    21.93s  agent 발화 시작: It’s a big responsibility, shaping the season! It really req
    21.96s  agent 발화 끝
    27.16s  agent 발화 끝
    27.36s  user  발화 시작: Hmmmmm…that makes sense. It's a lot of pressure.
    30.96s  agent 발화 시작: [sigh] It absolutely is. A director needs both artistic tast
    30.96s  user  발화 끝
    38.21s  agent 발화 끝
