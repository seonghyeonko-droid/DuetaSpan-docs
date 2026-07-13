# v3_rag_25_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_25",
#     "name": "서온",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-13",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-03-12",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-10-29",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-09-12",
#       "category": "work",
#       "text": "User works as a graduate student."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-29",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-02-21",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-09-08",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 이번 주말에 뭔가 재미있는 거 없을까? | S2 아니, 공포 영화 괜찮아. 근데 그거 말고 다른 거도 좀 찾아 | S3 라이트 아웃? 그건 어떤 영화야? | S4 월터 다윈 코이… 이름이 좀 낯설다.

     0.00s  user  발화 시작: 이번 주말에 뭔가 재미있는 거 없을까?
     3.00s  agent 발화 시작: 주말 계획을 세우시는군요. 어떤 종류의 재미있는 것을 찾으세요?
     3.00s  user  발화 끝
     6.99s  user  발화 시작: 어어.
     6.99s  agent 발화 끝
     7.49s  user  발화 시작: 음… 영화라도 볼까 하는데, 뭐 재미있는 거 있어?
     7.49s  user  발화 끝
    11.09s  <ret> 발화 (turn4 첫 프레임)
    11.49s  agent 발화 시작: <ret> 지금 상영 중인 영화를 알아봤는데, 제임스 완 감독의 "컨저링 이"가 있네요. 베라 파미가와 패트
    11.49s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.99s]: (tool result) "The Conjuring 2" is a 2016 American supernatural horror
    11.49s  user  발화 끝
    19.48s  user  발화 시작: 와.
    19.48s  agent 발화 끝
    19.98s  agent 발화 시작: 공포 영화를 좋아하시는군요. 혹시 다른 장르도 괜찮으세요?
    19.98s  user  발화 끝
    23.48s  user  발화 시작: 아니, 공포 영화 괜찮아. 근데 그거 말고 다른 거도 좀 찾아봐 줘.
    23.48s  agent 발화 끝
    29.32s  <ret> 발화 (turn8 첫 프레임)
    29.48s  agent 발화 시작: <ret> "컨저링" 유니버스의 스핀오프 작품인 "넌"이라는 영화도 있습니다. 코린 하디 감독의 이천십팔년 
    29.48s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.00s]: (tool result) "The Nun" is a 2018 American supernatural horror film di
    29.48s  user  발화 끝
    35.47s  user  발화 시작: 우와.
    35.47s  agent 발화 끝
    35.97s  user  발화 시작: 음… 넌은 좀 무서울 것 같기도 하고. 다른 거 없어?
    35.97s  user  발화 끝
    40.57s  <ret> 발화 (turn11 첫 프레임)
    40.97s  agent 발화 시작: <ret> 데이비드 F. 샌드버그 감독의 이천십육년 영화 "라이트 아웃"도 있습니다. 공포 영화네요.
    40.97s  ⚡SPAN 주입 [d'=1.44s / d_lead=5.50s]: (tool result) "Lights Out" is a 2016 American supernatural horror film
    40.97s  user  발화 끝
    46.46s  user  발화 시작: 라이트 아웃? 그건 어떤 영화야?
    46.46s  agent 발화 끝
    48.56s  <ret> 발화 (turn13 첫 프레임)
    48.96s  agent 발화 시작: <ret> 불을 끄면 나타나는 초자연적인 존재로부터 남동생을 보호해야 하는 여성의 이야기입니다.
    48.96s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.00s]: "Lights Out" tells the story of a woman who must protect her younger b
    48.96s  user  발화 끝
    53.96s  user  발화 시작: 아, 그거 재밌겠다. 혹시 "프론티어"에 나오는 내레이터가 누구였지?
    53.96s  agent 발화 끝
    57.79s  <ret> 발화 (turn15 첫 프레임)
    57.95s  agent 발화 시작: <ret> "프론티어"의 내레이터는 월터 다윈 코이입니다.
    57.95s  ⚡SPAN 주입 [d'=1.44s / d_lead=2.50s]: Walter Darwin Coy starred as the narrator of "Frontier".
    57.95s  user  발화 끝
    60.45s  user  발화 시작: 월터 다윈 코이… 이름이 좀 낯설다.
    60.45s  agent 발화 끝
    63.45s  agent 발화 시작: 네, 흔히 알려진 배우는 아니지만, "프론티어"에서 좋은 연기를 보여주셨습니다.
    63.45s  user  발화 끝
    67.95s  agent 발화 끝
