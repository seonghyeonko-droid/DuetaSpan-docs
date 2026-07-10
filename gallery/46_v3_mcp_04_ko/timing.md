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
#       "date": "2026-06-21",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-06-02",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-01-04",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-07-08",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-05-30",
#       "category": "home",
#       "text": "User's home address is 대구 중구 동인동 88-1."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-21",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-07-16",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 웹 브라우저 사용자 에이전트를 슈퍼크롤러 버전 십 점 일 | S2 네, 확인해 보고 싶은데, 지금 웹사이트 정보 좀 가져와 줄  | S3 아, 네, 그렇군요. 그런데… 슈퍼크롤러 설정이 제대로 된 건 | S4 음… 알겠습니다. 고맙습니다.

     0.00s  user  발화 시작: 혹시 웹 브라우저 사용자 에이전트를 슈퍼크롤러 버전 십 점 일로 설정해 줄 수 있을까요?
     4.59s  <ret> 발화 (turn1 첫 프레임)
     4.91s  user  발화 끝
     4.98s  agent 발화 시작: <ret> 사용자 에이전트를 슈퍼크롤러 버전 십 점 일로 설정했습니다. 확인해 보시겠어요?
     6.59s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.67s]: (tool result) "Mozilla/5.0 (compatible; SuperCrawler/10.1; +http://sup
     7.04s  user  발화 시작: 맞아요.
     7.53s  user  발화 끝
     9.65s  agent 발화 끝
     9.74s  user  발화 시작: 네, 확인해 보고 싶은데, 지금 웹사이트 정보 좀 가져와 줄 수 있을까요? 그… 네이버 메인 페이지요.
    15.75s  <ret> 발화 (turn4 첫 프레임)
    15.76s  user  발화 끝
    15.97s  agent 발화 시작: <ret> 네이버 메인 페이지를 크롤링했습니다. 현재 제목은 '네이버 — 대한민국 대표 검색 포털'입니다.
    17.75s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.30s]: (tool result) "네이버 — 대한민국 대표 검색 포털 : 검색, 뉴스, 블로그, 카페, 쇼핑, 메일, 지도"
    22.05s  user  발화 시작: 아, 네, 그렇군요. 그런데… 슈퍼크롤러 설정이 제대로 된 건지 궁금하네요.
    22.27s  agent 발화 끝
    26.57s  agent 발화 시작: 슈퍼크롤러 설정은 완료되었고, 현재 적용된 상태입니다. 걱정 마세요.
    26.59s  user  발화 끝
    31.43s  agent 발화 끝
    32.16s  user  발화 시작: 음… 알겠습니다. 고맙습니다.
    34.28s  user  발화 끝
    34.51s  agent 발화 시작: 천만에요.
    35.43s  agent 발화 끝
