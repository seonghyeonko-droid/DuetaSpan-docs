# v3_chain_06_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_06",
#     "name": "보준",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "60s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-27",
#       "category": "wake",
#       "text": "User usually wakes up close to 9am after night shifts."
#     },
#     {
#       "date": "2026-04-08",
#       "category": "partner",
#       "text": "User's partner is named Noah."
#     },
#     {
#       "date": "2026-03-15",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 19°C."
#     },
#     {
#       "date": "2026-02-24",
#       "category": "dislike",
#       "text": "User can't stand licorice."
#     },
#     {
#       "date": "2026-02-22",
#       "category": "savings",
#       "text": "User is saving for a trip to Europe next year."
#     },
#     {
#       "date": "2026-02-09",
#       "category": "airline",
#       "text": "User usually flies with Qatar Airways."
#     },
#     {
#       "date": "2026-02-05",
#       "category": "bloodtype",
#       "text": "User's blood type is B-."
#     },
#     {
#       "date": "2025-12-04",
#       "category": "sibling",
#       "text": "User has a younger sibling named Noah."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-08",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers for a 3-story house",
#         "wanted coverage for the basement office"
#       ]
#     },
#     {
#       "date": "2026-04-26",
#       "title": "Meal-prep planning",
#       "bullets": [
#         "wants high-protein lunches under 600 calories",
#         "avoiding dairy this month"
#       ]
#     },
#     {
#       "date": "2026-03-19",
#       "title": "Planning a camping trip",
#       "bullets": [
#         "a weekend at a lake site in September",
#         "asked about a 4-person tent and a cooler"
#       ]
#     },
#     {
#       "date": "2025-12-30",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing the Kia Niro hybrid and Hyundai Ioniq",
#         "wants under 30k miles and below 25M won"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 데이터 분석 코드 생성 세션…
     2.54s  user  발화 끝
     3.93s  user  발화 시작: …사십이번 종료하고 테스트 케이스 만들어줘.
     5.92s  agent 발화 시작: 그렇죠.
     6.75s  agent 발화 끝
     6.81s  <ret> 발화 (turn3 첫 프레임)
     7.33s  agent 발화 시작: <ret> 코드 생성 세션 사십이번을 종료했고, 테스트 케이스 data_analysis_tests.py를 만
     7.44s  user  발화 끝
     7.82s  ⚡SPAN 주입 [d'=1.01s / d_lead=6.62s]: (tool result) Session 42 ended. Test cases created: data analysis test
    10.72s  user  발화 시작: 응.
    11.07s  user  발화 끝
    13.95s  agent 발화 끝
    13.97s  user  발화 시작: 그 파일 어디에 저장됐어?
    16.12s  <ret> 발화 (turn6 첫 프레임)
    16.13s  user  발화 끝
    16.17s  agent 발화 시작: <ret> 파일은 /home/user/documents/data_analysis_tests.py에 저장됐어요
    17.17s  ⚡SPAN 주입 [d'=1.04s / d_lead=5.42s]: The file was saved to /home/user/documents/data_analysis_tests.py.
    21.59s  agent 발화 끝
