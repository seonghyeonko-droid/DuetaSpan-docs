# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "노빈",
#     "location": {
#       "city": "Busan",
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
#       "date": "2026-05-11",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-02-19",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-01-08",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2025-11-04",
#       "category": "home",
#       "text": "User's home address is 203 Birch Road."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-04",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-07-22",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-06-17",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 데미 로바토의 새 앨범은… | S2 혹시 그 앨범의 이름도 알 수 있을까요? | S3 그 앨범의 장르는 정확히 뭔가요? | S4 혹시 그 앨범 발매 후에 데미 로바토가 콘서트 투어를 했었나요

     0.00s  user  발화 시작: 데미 로바토의 새 앨범은…
     2.50s  user  발화 끝
     4.61s  user  발화 시작: …언제 나오나요? 이천십오년 기준으로요.
     8.41s  <ret> 발화 (turn2 첫 프레임)
     8.57s  agent 발화 시작: <ret> 이천십오년 십월에 발매되었군요… 서른 번째요.
     8.72s  user  발화 끝
    10.41s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.07s]: Demi Lovato released her fifth studio album, Demi, on October 30, 2015
    12.64s  agent 발화 끝
    13.53s  user  발화 시작: 아, 그렇군요. 음…
    15.28s  user  발화 끝
    15.77s  agent 발화 시작: 음악 활동에 새로운 변화를 주려는 시도였던 것 같아요. 창작 과정에서 어떤 영감을 받았을지 궁금하네요.
    22.39s  agent 발화 끝
    22.80s  user  발화 시작: 혹시 그 앨범의 이름도 알 수 있을까요?
    25.31s  <ret> 발화 (turn6 첫 프레임)
    25.39s  agent 발화 시작: <ret> 앨범 이름을 여쭤보셨네요… 데미 로바토의 다섯 번째 스튜디오 앨범, '컨피던스'라고 합니다. 이천
    25.48s  user  발화 끝
    26.99s  ⚡SPAN 주입 [d'=1.68s / d_lead=1.76s]: 이천십오년 십월에 발매되었군요… 서른 번째요.
    40.10s  agent 발화 끝
    40.48s  user  발화 시작: 컨피던스… 좋은 이름이네요. 그 앨범에 수록된 노래 중에 가장 인기 있는 곡은 뭐예요?
    46.14s  <ret> 발화 (turn8 첫 프레임)
    46.37s  agent 발화 시작: <ret> '스카이 스크래퍼'가 많은 사랑을 받았어요… 스카이 스크래퍼
    46.50s  user  발화 끝
    48.14s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.45s]: 데미 로바토의 다섯 번째 스튜디오 앨범, '컨피던스'라고 합니다.
    49.33s  user  발화 시작: 음.
    49.78s  user  발화 끝
    50.82s  agent 발화 끝
    50.91s  user  발화 시작: 스카이 스크래퍼요? 들어본 것 같아요.
    53.53s  agent 발화 시작: 네, 감성적인 가사와 멜로디가 인상적이죠. 데미 로바토의 보컬 실력도 돋보이는 곡이라고 생각해요.
    53.68s  user  발화 끝
    60.86s  agent 발화 끝
    61.11s  user  발화 시작: 그 앨범의 장르는 정확히 뭔가요?
    63.57s  <ret> 발화 (turn13 첫 프레임)
    63.73s  agent 발화 시작: <ret> 장르를 설명해 드리자면… 팝 음악을 기반으로 다양한 요소들이 혼합되어 있어요—
    63.92s  user  발화 끝
    65.56s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=5.00s]: Lisbon (38.70775, -9.13659): Lisboa Story Center (113 m), Pelourinho d
    68.03s  user  발화 시작: …그런데 그 앨범이 빌보드 차트에서 좋은 성적을 거뒀나요?
    68.73s  agent 발화 끝
    73.43s  agent 발화 시작: 빌보드 차트 성적을 확인해 드릴게요. ‘컨피던스’ 앨범은 빌보드 이백 차트에서 팔위를 기록했습니다.
    73.50s  user  발화 끝
    79.73s  agent 발화 끝
    80.74s  user  발화 시작: 팔위면 꽤 괜찮은데요?
    82.48s  agent 발화 시작: 네, 데미 로바토의 인기를 보여주는 지표라고 할 수 있겠네요. 발매 당시 많은 팬들의 기대를 모았어요.
    82.49s  user  발화 끝
    85.83s  user  발화 시작: 예.
    86.46s  user  발화 끝
    88.82s  agent 발화 끝
    88.89s  user  발화 시작: 혹시 그 앨범 발매 후에 데미 로바토가 콘서트 투어를 했었나요?
    93.28s  <ret> 발화 (turn20 첫 프레임)
    93.60s  agent 발화 시작: <ret> ‘퓨처 나우’라는 이름으로 북미, 남미, 유럽, 오세아니아를 순회하는 콘서트 투어를 진행했습니다.
    93.70s  user  발화 끝
    94.24s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.23s]: 데미 로바토의 인기를 보여주는 지표라고 할 수 있겠네요.
   100.89s  user  발화 시작: 음.
   101.34s  user  발화 끝
   108.63s  user  발화 시작: 오, 투어도 했었군요. 좋은 정보 감사합니다.
   108.63s  agent 발화 끝
   111.51s  <ret> 발화 (turn23 첫 프레임)
   111.67s  agent 발화 시작: <ret> 도움이 되었다니 다행이에요. 음악을 통해 긍정적인 에너지를 얻으시길 바랍니다.
   111.73s  user  발화 끝
   113.51s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.91s]: The Future Now Tour was a concert tour by Demi Lovato, visiting North 
   116.57s  agent 발화 끝
