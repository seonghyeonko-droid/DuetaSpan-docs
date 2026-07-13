# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "노현",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-24",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-04-25",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-02-14",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in December."
#     },
#     {
#       "date": "2026-01-06",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-07-21",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-08",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-05-19",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 데이 제트가 엑스박스로 언제 나와요? | S2 음… 그럼 데이 제트의 개발사는 어디인가요? | S3 모드였군요. 그럼 아르마 이랑은 어떻게 다른가요? | S4 아르마 삼도 엑스박스에서 할 수 있나요?

     0.00s  user  발화 시작: 데이 제트가 엑스박스로 언제 나와요?
     1.93s  <ret> 발화 (turn1 첫 프레임)
     2.25s  agent 발화 시작: <ret> 데이 제트는 이천십팔년 십이월 오일부터 피 씨, 플레이스테이션 사 엑스박스 원에서 이용 가능합니다
     2.25s  ⚡SPAN 주입 [d'=1.44s / d_lead=8.10s]: Day Z is currently available on PC, PlayStation 4, and Xbox One as of 
     2.25s  user  발화 끝
    10.35s  user  발화 시작: 엑스박스 원에 나온 지 꽤 됐네요. 지금도 잘 팔리고 있나요?
    10.35s  agent 발화 끝
    14.53s  <ret> 발화 (turn3 첫 프레임)
    14.85s  agent 발화 시작: <ret> 죄송합니다. 현재 데이 제트의 엑스박스 원 판매량에 대한 정보는 찾을 수 없습니다.
    14.85s  ⚡SPAN 주입 [d'=0.96s / d_lead=5.40s]: (no information found)
    14.85s  user  발화 끝
    20.25s  user  발화 시작: 음… 그럼 데이 제트의 개발사는 어디인가요?
    20.25s  agent 발화 끝
    22.72s  <ret> 발화 (turn5 첫 프레임)
    22.96s  agent 발화 시작: <ret> 데이 제트는 천구백구십구년 Ondřej Špelda, Viktor Bocan, Jan Špinle
    22.96s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.10s]: Bohemia Interactive is a Czech video game developer based in Prague, f
    22.96s  user  발화 끝
    31.06s  user  발화 시작: 네네.
    31.06s  agent 발화 끝
    31.51s  agent 발화 시작: Bohemia Interactive는 현실적인 군사 시뮬레이션 게임으로 유명한 회사입니다.
    31.51s  user  발화 끝
    35.11s  user  발화 시작: 데이 제트가 처음 나왔을 때 반응은 어땠나요?
    35.11s  agent 발화 끝
    38.10s  <ret> 발화 (turn9 첫 프레임)
    38.26s  agent 발화 시작: <ret> 데이 제트는 이천십이년 사월에 Arma 이의 모드로 처음 출시되었고, 독특한 생존 공포 게임 플레
    38.26s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.10s]: DayZ was initially released as a mod for Arma 2 in April 2012 and quic
    38.26s  user  발화 끝
    46.36s  user  발화 시작: 모드였군요. 그럼 아르마 이랑은 어떻게 다른가요?
    46.36s  agent 발화 끝
    49.06s  agent 발화 시작: 아르마 이는 밀리터리 시뮬레이션 게임이고—
    49.06s  user  발화 끝
    51.31s  user  발화 시작: … 아, 데이 제트 말고 다른 Bohemia Interactive 게임도 재밌는 거 있어요?
    51.31s  agent 발화 끝
    56.31s  <ret> 발화 (turn13 첫 프레임)
    56.71s  agent 발화 시작: <ret> 아르마 삼는 Bohemia Interactive에서 개발하고 이천십삼년 구월에 출시한 군사 전술 
    56.71s  ⚡SPAN 주입 [d'=1.36s / d_lead=5.40s]: Arma 3 was released in September 2013 and is a military tactical shoot
    56.71s  user  발화 끝
    62.11s  user  발화 시작: 아르마 삼도 엑스박스에서 할 수 있나요?
    62.11s  agent 발화 끝
    64.49s  <ret> 발화 (turn15 첫 프레임)
    64.81s  agent 발화 시작: <ret> 네, 아르마 삼는 피 씨, 플레이스테이션 사 엑스박스 원에서 모두 이용 가능합니다. 엑스박스 게임
    64.81s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.65s]: Arma 3 is available on PC, PlayStation 4, and Xbox One.
    64.81s  user  발화 끝
    72.47s  user  발화 시작: 아.
    72.47s  agent 발화 끝
    72.92s  user  발화 시작: 오, 게임 패스에 있다니 좋네요. 그럼 데이 제트도 게임 패스에 있나요?
    72.92s  user  발화 끝
    77.79s  <ret> 발화 (turn18 첫 프레임)
    77.87s  agent 발화 시작: <ret> 죄송합니다. 데이 제트가 엑스박스 게임 패스에 포함되어 있는지에 대한 정보는 찾을 수 없습니다.
    77.87s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.85s]: (no information found)
    77.87s  user  발화 끝
    83.72s  agent 발화 끝
