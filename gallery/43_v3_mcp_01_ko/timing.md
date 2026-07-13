# v3_mcp_01_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_01",
#     "name": "세재",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-18",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-03-29",
#       "category": "home",
#       "text": "User's home address is 서울 마포구 성산동 45-6."
#     },
#     {
#       "date": "2025-08-22",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-06-01",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-25",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-10-31",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 버킹엄 궁전의 고도가 어떻게 돼? | S2 파리! 좋아. 파리에서 가장 가까운 기차역이 어디야? | S3 가르 뒤 노르 역… 음… | S4 …거기서 브뤼셀까지 기차표 예매해 줘. 다음 주 화요일.

     0.00s  user  발화 시작: 버킹엄 궁전의 고도가 어떻게 돼?
     2.77s  <ret> 발화 (turn1 첫 프레임)
     3.01s  agent 발화 시작: <ret> 버킹엄 궁전은 해발 십칠미터에 위치해 있습니다. 런던에 가실 계획이신가요?
     3.01s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.42s]: Buckingham Palace is located at 51.501366° N, 0.131854° W and has an e
     3.01s  user  발화 끝
     8.44s  user  발화 시작: 십칠미터나 돼? 음, 그럼 에펠탑은 얼마나 높지?
     8.44s  agent 발화 끝
    12.42s  <ret> 발화 (turn3 첫 프레임)
    12.66s  agent 발화 시작: <ret> 에펠탑은 안테나를 포함해서 삼백삼십미터 높이입니다. 파리 여행도 생각하고 계신 건가요?
    12.66s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.03s]: The Eiffel Tower is 330 metres tall, including the antenna, and is loc
    12.66s  user  발화 끝
    18.68s  user  발화 시작: 헐.
    18.68s  agent 발화 끝
    19.29s  user  발화 시작: 파리! 좋아. 파리에서 가장 가까운 기차역이 어디야?
    19.29s  user  발화 끝
    23.27s  <ret> 발화 (turn6 첫 프레임)
    23.51s  agent 발화 시작: <ret> 파리에서 가장 중요한 기차역은 가르 뒤 노르 역입니다. 고속 열차와 지역 연결을 모두 이용할 수 
    23.51s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.64s]: (tool result) Gare du Nord is the most prominent train station in Pari
    23.51s  user  발화 끝
    33.15s  user  발화 시작: 가르 뒤 노르 역… 음…
    33.15s  agent 발화 끝
    36.16s  user  발화 시작: …거기서 브뤼셀까지 기차표 예매해 줘. 다음 주 화요일.
    36.16s  user  발화 끝
    40.74s  <ret> 발화 (turn9 첫 프레임)
    40.98s  agent 발화 시작: <ret> 이천이십육년 칠월 십사일 가르 뒤 노르 역에서 브뤼셀까지 기차표가 사십오유로부터 시작합니다. 예약
    40.98s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.05s]: (tool result) Train tickets from Gare du Nord to Brussels for July 14,
    40.98s  user  발화 끝
    53.04s  agent 발화 끝
