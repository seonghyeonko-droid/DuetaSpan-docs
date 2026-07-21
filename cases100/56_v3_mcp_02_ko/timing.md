# v3_mcp_02_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_02",
#     "name": "정별",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-01",
#       "category": "airline",
#       "text": "User usually flies with Emirates."
#     },
#     {
#       "date": "2026-05-31",
#       "category": "streaming",
#       "text": "User subscribes to Wavve and Melon."
#     },
#     {
#       "date": "2026-05-26",
#       "category": "employer",
#       "text": "User works at a school district."
#     },
#     {
#       "date": "2026-04-06",
#       "category": "medication",
#       "text": "User takes blood-pressure medication."
#     },
#     {
#       "date": "2026-02-19",
#       "category": "skill",
#       "text": "User is getting fairly good at salsa dancing."
#     },
#     {
#       "date": "2026-01-28",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Georgian."
#     },
#     {
#       "date": "2025-12-03",
#       "category": "commute",
#       "text": "User works from home."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-24",
#       "title": "Choosing a preschool",
#       "bullets": [
#         "wants one within walking distance",
#         "asked about hours and monthly fees"
#       ]
#     },
#     {
#       "date": "2026-03-22",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six on the 14th",
#         "looking for outdoor seating with a vegetarian option"
#       ]
#     },
#     {
#       "date": "2025-12-07",
#       "title": "Booking a moving company",
#       "bullets": [
#         "moving a 2-bedroom apartment across town on the 30th",
#         "needs help disassembling furniture"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 안녕하세요, 투로 씨. 아이들 위한 프리미엄 멤버십 만들고 싶은데 도와주실 수 있나요?
     5.29s  <ret> 발화 (turn1 첫 프레임)
     5.37s  user  발화 끝
     5.43s  agent 발화 시작: <ret> 네, 프리미엄 액세스라는 월간 멤버십을 상품 아이디 피 알 오 디 일 이 삼 사 오로 만들었어요.
     6.59s  ⚡SPAN 주입 [d'=1.30s / d_lead=11.04s]: (tool result) prod-12345, Premium Access, Monthly access to all premiu
    16.46s  agent 발화 끝
    16.86s  user  발화 시작: 와, 빠르네요! 혹시 리우데자네이루에 있는 예수상 위치 좀 알려주시겠어요?
    22.12s  <ret> 발화 (turn3 첫 프레임)
    22.37s  user  발화 끝
    22.38s  agent 발화 시작: <ret> 브라질 여행 계획을 세우시는군요! 예수상은 브라질 리우데자네이루 알토 다 보아 비스타에 있고, 위
    23.37s  ⚡SPAN 주입 [d'=1.25s / d_lead=2.37s]: Cristo Redentor, Cristo del Corcovado, Alto da Boa Vista, Rio de Janei
    35.41s  agent 발화 끝
