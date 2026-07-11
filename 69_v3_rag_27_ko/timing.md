# v3_rag_27_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_27",
#     "name": "윤준",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-01-23",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-11-14",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-08-03",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2025-06-04",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-03",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-07-13",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-06-09",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 안녕하세요. 새로운 도시에 이사 왔는데, 적응하는 데 좀 어려움을 느끼고 있어요.
     5.09s  user  발화 끝
     5.21s  agent 발화 시작: 안녕하세요. 새로운 곳에 오신 걸 환영해요. 라리스입니다. 혹시 어떤 점이 가장 힘드신가요?
     8.14s  user  발화 시작: 예.
     8.58s  user  발화 끝
    11.03s  user  발화 시작: 음… 주변에 아는 사람이 하나도 없어서 외로운 것 같아요.
    11.14s  agent 발화 끝
    14.88s  agent 발화 시작: 외로움은 새로운 시작에서 흔히 겪는 감정이에요. 괜찮아요, 시간이 지나면 나아질 거예요.
    15.06s  user  발화 끝
    17.50s  user  발화 시작: 아.
    18.00s  user  발화 끝
    19.36s  <ret> 발화 (turn6 첫 프레임)
    19.75s  agent 발화 시작: <ret> 두 분은 서로 다른 밴드에서 활동하고 계세요. 대니 셜리는 밴드 Fields of the Neph
    19.76s  ⚡SPAN 주입 [d'=1.76s / d_lead=9.13s]: Danny Shirley is the lead vocalist of the British rock band Fields of 
    19.92s  agent 발화 끝
    28.88s  agent 발화 끝
    28.89s  user  발화 시작: 아, 그렇군요. 두 분이 같은 밴드에 있는 줄 알았어요.
    32.34s  agent 발화 시작: 가끔 오해가 생길 수도 있죠. 새로운 사람들을 만나면서 즐거운 시간을 보내시길 바랍니다.
    32.50s  user  발화 끝
    37.20s  agent 발화 끝
