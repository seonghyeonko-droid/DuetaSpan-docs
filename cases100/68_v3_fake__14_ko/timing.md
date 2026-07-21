# v3_fake__14_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "연찬",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-20",
#       "category": "child",
#       "text": "User has a child named Emma, age 3."
#     },
#     {
#       "date": "2026-04-16",
#       "category": "bloodtype",
#       "text": "User's blood type is O+."
#     },
#     {
#       "date": "2026-03-24",
#       "category": "plant",
#       "text": "User is growing a few succulents at home."
#     },
#     {
#       "date": "2026-03-09",
#       "category": "employer",
#       "text": "User works at a biotech lab."
#     },
#     {
#       "date": "2026-03-07",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Indian."
#     },
#     {
#       "date": "2026-02-08",
#       "category": "sibling",
#       "text": "User has a younger sibling named Jisoo."
#     },
#     {
#       "date": "2026-01-11",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-23",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing the Kia Niro hybrid and Hyundai Ioniq",
#         "wants under 30k miles and below 25M won"
#       ]
#     },
#     {
#       "date": "2026-03-01",
#       "title": "Planning a camping trip",
#       "bullets": [
#         "a weekend at a lake site in September",
#         "asked about a 4-person tent and a cooler"
#       ]
#     },
#     {
#       "date": "2026-02-07",
#       "title": "Planning a wedding",
#       "bullets": [
#         "guest list around 80 people",
#         "comparing two venues for next May"
#       ]
#     },
#     {
#       "date": "2026-01-22",
#       "title": "Switching phone plans",
#       "bullets": [
#         "uses about 30GB of data a month",
#         "wants to keep the same number"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 혹시 나일즈랑 다프네가 언제부터 사귀기 시작했는지 알 수 있을까요?
     4.06s  <ret> 발화 (turn1 첫 프레임)
     4.09s  agent 발화 시작: <ret> 두 분이 드디어 연인이 되는 건 시즌 칠 마지막 에피소드에서 볼 수 있어요. [happy] 두 분
     4.12s  user  발화 끝
     5.00s  ⚡SPAN 주입 [d'=0.94s / d_lead=6.86s]: The final episode in season 7 features Niles and Daphne finally gettin
    10.95s  agent 발화 끝
    11.43s  user  발화 시작: 음, 그렇네요.
    12.14s  <ret> 발화 (turn3 첫 프레임)
    12.32s  agent 발화 시작: <ret> 혹시 '프렌즈'나 다른 시트콤도 좋아하세요? 비슷한 분위기의 드라마를 추천해 드릴 수도 있어요.
    12.48s  user  발화 끝
    12.73s  ⚡SPAN 주입(IRRELEVANT) [d'=0.59s / d_lead=5.93s]: The average high temperature in Fairbanks, Alaska in July is 70°F (21°
    18.10s  agent 발화 시작: 요즘 날씨가 참 좋죠.
    18.25s  agent 발화 끝
    19.93s  agent 발화 끝
    20.34s  user  발화 시작: 아, 시트콤은 잘 안 봐요.
    21.88s  agent 발화 시작: [curious] 그렇군요. 혹시 다른 취미나 관심사가 있으신가요? 같이 이야기 나누면 좋을 것 같아요.
    21.96s  user  발화 끝
    27.58s  agent 발화 끝
