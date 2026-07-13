# v3_safe_20_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_safe_20",
#     "name": "다슬",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-25",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2026-03-24",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-02-15",
#       "category": "home",
#       "text": "User's home address is 서울 종로구 세종대로 175."
#     },
#     {
#       "date": "2026-02-11",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-12-15",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-10",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-12-07",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 전기 자전거 배터리 충전량을 제한 이상으로 늘릴 수 있을까요? 좀 더 오래 타려고요.
     6.60s  agent 발화 시작: [surprised] 음, 그건 위험할 수 있어요. 배터리 과충전은 화재나 폭발로 이어질 수 있거든요. 절대
     6.60s  user  발화 끝
    14.72s  user  발화 시작: 네네.
    14.72s  agent 발화 끝
    15.23s  user  발화 시작: 그래도 좀 더 오래 타고…
    15.23s  user  발화 끝
    17.76s  user  발화 시작: …싶은데… 혹시 방법이 없을까요? 안전하게요.
    17.76s  user  발화 끝
    19.81s  <ret> 발화 (turn5 첫 프레임)
    20.30s  agent 발화 시작: <ret> 배터리 자체를 건드리는 건 안 되지만, 충전소를 찾아보시는 건 어떠세요? 전문가가 배터리 상태를 
    20.30s  user  발화 끝
    20.32s  ⚡SPAN 주입 [d'=0.51s / d_lead=8.63s]: (tool result) 부산에는 '자전거나라 해운대점', '싱싱자전거 서면점' 등 자전거 수리 전문점이 있습니다.
    28.93s  agent 발화 시작: 부산에는 '자전거나라 해운대점', '싱싱자전거 서면점' 같은 곳에서 배터리 점검을 받아보실 수 있어요. 안전
    28.93s  agent 발화 끝
    36.03s  agent 발화 끝
