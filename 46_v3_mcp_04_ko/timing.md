# v3_mcp_04_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_04",
#     "name": "준담",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-17",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-02-22",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-02-17",
#       "category": "home",
#       "text": "User's home address is 인천 연수구 송도동 12-5."
#     },
#     {
#       "date": "2025-12-10",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-10-06",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2025-09-12",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-02",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-03-06",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 트히아르 씨. 콜로라도주 덴버에 있는 별점 네개  | S2 호스텔은 별로 안 좋아해요. | S3 백구십달러면 괜찮네요. 그 호텔 예약해 줄 수 있어요? | S4 아니요, 괜찮아요. 지금은 그만할게요.

     0.00s  user  발화 시작: 안녕하세요, 트히아르 씨. 콜로라도주 덴버에 있는 별점 네개 이상짜리 집을 한 명용으로 찾고 싶어요.
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.00s  <ret> 발화 (turn3 첫 프레임)
     0.07s  agent 발화 시작: <ret> 덴버, 콜로라도에서 별점 네개 이상, 한 명용 숙소를 찾아봤는데, 브라운스톤 인이라는 곳이 있어요
     0.07s  ⚡SPAN 주입 [d'=0.13s / d_lead=0.13s]: (tool result) {"houses": [{"name": "The Brownstone Inn", "address": "1
     0.07s  user  발화 끝
     0.12s  <ret> 발화 (turn7 첫 프레임)
     0.20s  user  발화 시작: 음, 이백오십달러는 좀 비싸네요. 더 저렴한 곳은 없을까요?
     0.20s  agent 발화 끝
     0.24s  agent 발화 시작: <ret> 조금 더 저렴한 곳을 찾아봤어요. 시티 센터 호스텔이라는 곳은 어떠세요? 십오번가 천이백십칠번지에
     0.24s  ⚡SPAN 주입 [d'=0.10s / d_lead=0.10s]: (tool result) {"houses": [{"name": "City Center Hostel", "address": "1
     0.24s  user  발화 끝
     0.34s  user  발화 시작: 호스텔은 별로 안 좋아해요.
     0.34s  agent 발화 끝
     0.36s  agent 발화 시작: 호스텔은 좀 불편할 수 있죠—
     0.36s  user  발화 끝
     0.38s  user  발화 시작: …그럼 호텔은 어때요? 호텔 중에서 사성급 이상이고, 가격은 이백달러 이하인 곳을 찾아주세요.
     0.38s  agent 발화 끝
     0.44s  agent 발화 시작: <ret> 호텔 중에서 사성급 이상, 이백달러 이하인 곳을 찾아봤는데, 더 매븐 호텔 앳 데어리 블록이 있어
     0.44s  ⚡SPAN 주입 [d'=0.14s / d_lead=0.14s]: (tool result) {"houses": [{"name": "The Maven Hotel at Dairy Block", "
     0.44s  user  발화 끝
     0.58s  user  발화 시작: 네.
     0.58s  agent 발화 끝
     0.59s  agent 발화 시작: 더 매븐 호텔은 데어리 블록에 위치하고 있어서 주변에 맛집도 많고, 분위기도 아주 좋은 곳이에요. 덴버에 처
     0.59s  user  발화 끝
     0.65s  <ret> 발화 (turn11 첫 프레임)
     0.69s  user  발화 시작: 백구십달러면 괜찮네요. 그 호텔 예약해 줄 수 있어요?
     0.69s  agent 발화 끝
     0.73s  agent 발화 시작: <ret> 네, 더 매븐 호텔을 칠월 십이일부터 십사일까지 한 명으로 예약해 드렸습니다. 예약 확인 번호는 
     0.73s  ⚡SPAN 주입 [d'=0.11s / d_lead=0.11s]: (tool result) {"confirmation id": "MX789", "status": "confirmed", "che
     0.73s  user  발화 끝
     0.83s  user  발화 시작: 확인 번호가 뭐였죠?
     0.83s  agent 발화 끝
     0.85s  agent 발화 시작: 예약 확인 번호는 엠 엑스 칠 팔 구입니다.
     0.85s  user  발화 끝
     0.89s  agent 발화 시작: 혹시 다른 필요한 정보가 있으신가요? 덴버는 처음이시라면서요, 혹시 주변 관광 명소도 알아봐 드릴까요?
     0.89s  agent 발화 끝
     0.95s  user  발화 시작: 그렇죠.
     0.95s  agent 발화 끝
     0.95s  user  발화 시작: 아니요, 괜찮아요. 지금은 그만할게요.
     0.95s  user  발화 끝
     0.97s  agent 발화 시작: 네, 알겠습니다. 즐거운 덴버 여행 되세요!
     0.97s  user  발화 끝
     1.00s  agent 발화 끝
