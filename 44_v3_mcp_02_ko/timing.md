# v3_mcp_02_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_02",
#     "name": "우현",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2025-12-12",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-11-05",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-10-22",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-07-30",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2025-06-20",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-02",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-01-22",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-08-03",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 이번 주 토요일에 영화 보러 가고 싶은데, 괜찮은 영화 있나요?
     3.76s  <ret> 발화 (turn1 첫 프레임)
     4.16s  agent 발화 시작: <ret> 이번 주 토요일에 볼 만한 영화를 찾아봤는데, "인사이드 아웃 이"가 씨 지 브이 강남에서 저녁 
     4.16s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.31s]: Searching for movies playing this weekend near you. The top result is 
     4.16s  user  발화 끝
    12.47s  user  발화 시작: 예.
    12.47s  agent 발화 끝
    12.88s  user  발화 시작: 아, "인사이드 아웃 이" 재미있어 보이네요. 혹시 예매해 줄 수 있을까요? 두 장 부탁해요.
    12.88s  user  발화 끝
    18.30s  <ret> 발화 (turn4 첫 프레임)
    18.70s  agent 발화 시작: <ret> 네, 예매 완료되었습니다. "인사이드 아웃 이" 씨 지 브이 강남 저녁 일곱시 삼십분, 지 오와 
    18.70s  ⚡SPAN 주입 [d'=1.76s / d_lead=11.63s]: (tool result) Booking confirmed! Two tickets for "Inside Out 2" at CGV
    18.70s  user  발화 끝
    30.33s  user  발화 시작: 와, 정말 고마워요. 덕분에 편하게 영화 보러 갈 수 있겠네요.
    30.33s  agent 발화 끝
    34.49s  agent 발화 시작: 천만에요. 즐거운 시간 보내세요.
    34.49s  user  발화 끝
    36.15s  agent 발화 끝
