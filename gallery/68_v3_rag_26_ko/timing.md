# v3_rag_26_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_26",
#     "name": "지슬",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-01",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in August."
#     },
#     {
#       "date": "2026-03-30",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-03-19",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2026-02-20",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2026-01-21",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-12-06",
#       "category": "work",
#       "text": "User works as a physical therapist."
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
#     },
#     {
#       "date": "2026-02-20",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 사리 씨. 뉴욕에 이사 온 지 얼마 안 됐는데,  | S2 아, '레 미제라블'도 좋아하는데… 지금 뉴욕에서 볼 수 있어 | S3 음… 이탈리아 음식이 당기네요. | S4 아, 덥겠네요. 그럼 옷을 가볍게 입어야겠어요.

     0.00s  user  발화 시작: 안녕하세요, 사리 씨. 뉴욕에 이사 온 지 얼마 안 됐는데, 정착하는 데 도움을 주신다고 들었어요.
     7.75s  agent 발화 시작: 네.
     7.75s  user  발화 끝
     8.27s  agent 발화 시작: 안녕하세요. 뉴욕 정착을 도와드리게 되어 기쁩니다. 무엇부터 시작해 볼까요?
     8.27s  agent 발화 끝
    12.92s  user  발화 시작: 음… 뉴욕에서 오래된 뮤지컬을 보고 싶은데, 뭐가 제일 유명한가요?
    12.92s  agent 발화 끝
    17.44s  <ret> 발화 (turn4 첫 프레임)
    17.56s  agent 발화 시작: <ret> 브로드웨이 역사상 가장 오래된 뮤지컬은 '오페라의 유령'이에요. 천구백팔십팔년 일월 이십육일에 초
    17.56s  user  발화 끝
    18.11s  ⚡SPAN 주입 [d'=0.67s / d_lead=10.33s]: The Phantom of the Opera is the longest-running show in Broadway histo
    27.90s  user  발화 시작: 네.
    27.90s  agent 발화 끝
    28.41s  user  발화 시작: 와, 정말 오래됐네요. 혹시…
    28.41s  user  발화 끝
    30.48s  user  발화 시작: …다른 유명한 뮤지컬도 있을까요?
    30.48s  user  발화 끝
    32.55s  agent 발화 시작: '레 미제라블'이나 '라이언 킹'도 오랫동안 사랑받는 뮤지컬이에요.
    32.55s  user  발화 끝
    36.16s  user  발화 시작: 아, '레 미제라블'도 좋아하는데… 지금 뉴욕에서 볼 수 있어요?
    36.16s  agent 발화 끝
    40.66s  <ret> 발화 (turn10 첫 프레임)
    40.81s  agent 발화 시작: <ret> 네, '레 미제라블'은 임페리얼 극장에서 공연 중이에요. 칠월 십오일부터 십칠일까지 공연이 있고,
    40.81s  user  발화 끝
    42.10s  ⚡SPAN 주입 [d'=1.44s / d_lead=8.78s]: (tool result) {"events": [{"name": "Les Misérables", "venue": "Imperia
    49.59s  user  발화 시작: 칠월 십오일 티켓 예매해 줄 수 있어요?
    49.59s  agent 발화 끝
    53.02s  <ret> 발화 (turn12 첫 프레임)
    53.21s  agent 발화 시작: <ret> 네, '레 미제라블' 칠월 십오일 티켓 한장을 예매했습니다. 확인 코드는 엘 엠 칠 일 오 엔 와
    53.21s  user  발화 끝
    53.63s  ⚡SPAN 주입 [d'=0.61s / d_lead=9.82s]: (tool result) {"confirmation id": "LM715NY26"}
    63.03s  user  발화 시작: 네.
    63.03s  agent 발화 끝
    63.54s  user  발화 시작: 감사합니다! 혹시 근처에 괜찮은 레스토랑도 추천해 주실 수 있나요?
    63.54s  user  발화 끝
    68.19s  agent 발화 시작: 임페리얼 극장 근처에는 다양한 레스토랑이 있어요. 어떤 종류의 음식을 좋아하시나요?
    68.19s  user  발화 끝
    73.36s  user  발화 시작: 음.
    73.36s  agent 발화 끝
    73.88s  user  발화 시작: 음… 이탈리아 음식이 당기네요.
    73.88s  user  발화 끝
    75.88s  <ret> 발화 (turn18 첫 프레임)
    75.94s  agent 발화 시작: <ret> 임페리얼 극장에서 영 점 이마일 거리에 있는 '베코'라는 이탈리아 레스토랑이 평점 사 점 오점이에
    75.94s  user  발화 끝
    77.21s  ⚡SPAN 주입 [d'=1.33s / d_lead=7.23s]: (tool result) {"restaurants": [{"name": "Becco", "cuisine": "Italian",
    83.17s  user  발화 시작: '베코' 좋네요. 혹시 그 레스토랑 예약도 가능할까요?
    83.17s  agent 발화 끝
    86.19s  <ret> 발화 (turn20 첫 프레임)
    86.79s  agent 발화 시작: <ret> 네, '베코' 레스토랑 칠월 십오일 저녁 여섯시에 한명으로 예약했습니다. 확인 코드는 비 씨 씨 
    86.79s  user  발화 끝
    86.82s  ⚡SPAN 주입 [d'=0.63s / d_lead=9.82s]: (tool result) {"confirmation id": "BCC6PM15"}
    96.61s  user  발화 시작: 정말 감사합니다, 사리 씨. 덕분에 뉴욕 생활이 훨씬 편해질 것 같아요.
    96.61s  agent 발화 끝
   102.29s  agent 발화 시작: 예.
   102.29s  user  발화 끝
   102.81s  agent 발화 시작: 도움이 되었다니 다행입니다.
   102.81s  agent 발화 끝
   104.36s  user  발화 시작: 오늘 날씨가 어때요?
   104.36s  agent 발화 끝
   105.87s  <ret> 발화 (turn25 첫 프레임)
   105.90s  agent 발화 시작: <ret> 뉴욕의 현재 날씨는 기온 이십육 점 칠도, 습도 육십이퍼센트, 바람은 시속 팔 점 이킬로미터입니다
   105.90s  user  발화 끝
   106.86s  ⚡SPAN 주입 [d'=0.99s / d_lead=7.23s]: (tool result) "26.7°C, humidity 62%, wind 8.2 km/h"
   113.14s  user  발화 시작: 아, 덥겠네요. 그럼 옷을 가볍게 입어야겠어요.
   113.14s  agent 발화 끝
   116.24s  agent 발화 시작: 네, 가벼운 옷차림을 추천해 드립니다.
   116.24s  user  발화 끝
   118.82s  user  발화 시작: 혹시 뉴욕 지하철 노선도를 알려줄 수 있을까요?
   118.82s  agent 발화 끝
   122.44s  agent 발화 시작: 뉴욕 지하철 노선도는 복잡해서요, 제가 직접 보여드리기는 어렵습니다. 하지만 엠 티 에이 웹사이트에서 자세한
   122.44s  user  발화 끝
   131.74s  user  발화 시작: 알겠습니다. 엠 티 에이 웹사이트를 찾아봐야겠네요.
   131.74s  agent 발화 끝
   134.84s  agent 발화 시작: 네, 그렇게 하시는 게 좋겠어요. 즐거운 관람 되세요!
   134.84s  user  발화 끝
   138.97s  agent 발화 끝
