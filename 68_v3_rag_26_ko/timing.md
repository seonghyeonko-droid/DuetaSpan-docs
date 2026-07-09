# v3_rag_26_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_26",
#     "name": "Emilia",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-10",
#       "category": "home",
#       "text": "User's home address is 249 Cedar Lane."
#     },
#     {
#       "date": "2026-04-10",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-02-09",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-11-30",
#       "category": "work",
#       "text": "User works as a accountant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-09-24",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-05-28",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 음… 검은색, 빨간색, 노란색이 들어간 국기가 궁금해. 혹시 알아? 요즘 공부가 너무 안 돼서 머리가 엉망이
     9.07s  <ret> 발화 (turn1 첫 프레임)
     9.14s  agent 발화 시작: <ret> 색깔 조합만으로는 여러 나라가 있을 수 있거든요.
     9.27s  user  발화 끝
    11.07s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.52s]: [source: Britannica] The flag of Germany features three horizontal ban
    12.58s  agent 발화 시작: 독일 국기를 말씀하시는 걸까요? 독일 국기는 검은색, 빨간색, 금색—노란색—가로 줄무늬로 이루어져 있어요.
    12.66s  agent 발화 끝
    15.28s  user  발화 시작: 음.
    15.78s  user  발화 끝
    19.91s  user  발화 시작: 잠깐만, 혹시 그 국기 색깔에 특별한 의미가 있어?
    19.99s  agent 발화 끝
    23.94s  <ret> 발화 (turn5 첫 프레임)
    24.08s  agent 발화 시작: <ret> 색깔에는 역사적인 의미가 담겨 있답니다. 검은색은 자유를, 빨간색은 정의를, 그리고 노란색은 희망
    24.27s  user  발화 끝
    25.94s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.17s]: [source: History.com] The colors of the German flag are said to repres
    33.22s  user  발화 시작: 오, 그렇구나. 공부하다가 잠깐 딴 생각했네. 독일 국기 말고 다른 나라도 비슷한 색깔을 쓰나?
    33.25s  agent 발화 끝
    40.81s  user  발화 끝
    41.08s  agent 발화 시작: 비슷한 색을 가진 국기는 또 있을 수 있어요. 어떤 다른 나라들이 궁금하신가요?
    46.92s  agent 발화 끝
