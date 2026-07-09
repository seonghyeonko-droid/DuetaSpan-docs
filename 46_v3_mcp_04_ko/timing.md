# v3_mcp_04_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_04",
#     "name": "시호",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-08-03",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-07-11",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-04-05",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-01-15",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-01-05",
#       "category": "home",
#       "text": "User's home address is 289 Pine Court."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-12",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 혹시 웹 브라우저 사용자 에이전트를 SuperCrawler 버전 10.1로 설정해 줄 수 있을까요?
     4.97s  <ret> 발화 (turn1 첫 프레임)
     5.36s  agent 발화 시작: <ret> 네, 그렇게 해 드릴게요. 사용자 에이전트가 SuperCrawler 버전 10.1로 설정되었습니다
     5.42s  user  발화 끝
     6.17s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.41s]: (tool result) The user agent was successfully set to SuperCrawler vers
     8.68s  user  발화 시작: 네.
     9.03s  user  발화 끝
    11.38s  agent 발화 끝
    12.11s  user  발화 시작: 잠깐만요, 혹시 지금 설정된 사용자 에이전트가 제대로 적용되었는지 확인해 볼 수 있을까요?
    17.44s  <ret> 발화 (turn4 첫 프레임)
    17.66s  agent 발화 시작: <ret> 물론입니다, 확인해 드릴게요. 현재 사용자 에이전트는 SuperCrawler 버전 10.1입니다.
    17.70s  user  발화 끝
    18.64s  ⚡SPAN 주입 [d'=1.20s / d_lead=1.84s]: (tool result) The current user agent is SuperCrawler version 10.1.
    23.18s  agent 발화 끝
