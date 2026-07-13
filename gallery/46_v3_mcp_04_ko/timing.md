# v3_mcp_04_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_04",
#     "name": "수슬",
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
#       "date": "2026-06-07",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-05-06",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-02-19",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2026-01-30",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-01-27",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-23",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 마이애미에 식료품점이 어디 있는지 찾아줘.
     2.18s  <ret> 발화 (turn1 첫 프레임)
     2.51s  agent 발화 시작: <ret> 마이애미 비치 워싱턴 애비뉴 천육백팔십번지에 있는 홀 푸드 마켓 사우스 비치가 가장 가깝고 평점은
     2.51s  user  발화 끝
     3.26s  ⚡SPAN 주입 [d'=1.08s / d_lead=13.57s]: (tool result) {"results": [{"name": "Whole Foods Market South Beach", 
    16.09s  user  발화 시작: 거긴 너무 비싸. 좀 더 저렴한 곳 찾아봐.
    16.09s  agent 발화 끝
    20.02s  <ret> 발화 (turn4 첫 프레임)
    20.11s  agent 발화 시작: 네.
    20.11s  user  발화 끝
    20.61s  agent 발화 시작: <ret> 알디는 이십번가 팔백번지에 있고 평점은 사 점 이점이고, 월마트 슈퍼센터는 삼십육번가 칠천백번지에
    20.61s  agent 발화 끝
    21.24s  ⚡SPAN 주입 [d'=1.22s / d_lead=8.55s]: (tool result) {"results": [{"name": "Aldi", "address": "800 NW 20th St
    29.16s  user  발화 시작: 어.
    29.16s  agent 발화 끝
    29.66s  user  발화 시작: 알디까지 얼마나 걸려? 지금 출발하면.
    29.66s  user  발화 끝
    32.14s  <ret> 발화 (turn7 첫 프레임)
    32.18s  agent 발화 시작: <ret> 현재 위치에서 알디까지 거리는 사 점 팔킬로미터이고, 소요 시간은 이십분입니다. 북쪽으로 이십번가
    32.18s  user  발화 끝
    33.00s  ⚡SPAN 주입 [d'=0.86s / d_lead=7.54s]: (tool result) {"distance": "4.8 km", "duration": "20 minutes", "route"
    39.72s  agent 발화 끝
