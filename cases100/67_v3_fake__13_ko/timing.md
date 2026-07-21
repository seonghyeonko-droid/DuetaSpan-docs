# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 섹스 앤 더 시티에서 미스터 빅 역을 누가 맡았지? | S2 오, '섹스 앤 더 시티' 말고 다른 드라마도 있었어요? | S3 음… '고담'이 좀 더 끌리네요. 혹시 예약도 가능해요? | S4 …편하게 저녁 먹을 수 있겠네요.

     0.00s  user  발화 시작: 섹스 앤 더 시티에서 미스터 빅 역을 누가 맡았지?
     1.52s  agent 발화 시작: 그렇죠.
     2.36s  <ret> 발화 (turn2 첫 프레임)
     2.48s  agent 발화 끝
     2.95s  agent 발화 시작: <ret> 음, 잠깐만요.
     3.06s  user  발화 끝
     4.17s  ⚡SPAN 주입 [d'=1.81s / d_lead=1.86s]: Christopher David Noth.
     4.71s  agent 발화 시작: 크리스토퍼 데이비드 노스 씨가 맡았어요.
     4.81s  agent 발화 끝
     7.49s  user  발화 시작: 아, 그렇군요. 혹시 그 배우 다른 작품도 해봤어요?
     7.51s  agent 발화 끝
    11.35s  <ret> 발화 (turn5 첫 프레임)
    11.49s  agent 발화 시작: <ret> 네, 물론이죠. 꽤 많은 작품에 출연했어요.
    11.63s  user  발화 끝
    12.67s  ⚡SPAN 주입 [d'=1.33s / d_lead=3.79s]: Christopher David Noth is an American actor. He is known for his role 
    15.21s  agent 발화 시작: 크리스토퍼 데이비드 노스 씨는 '섹스 앤 더 시티'의 미스터 빅 역할로 유명한 미국 배우예요.
    15.27s  agent 발화 끝
    19.55s  user  발화 시작: 응.
    19.94s  user  발화 끝
    21.59s  agent 발화 끝
    22.62s  user  발화 시작: 오, '섹스 앤 더 시티' 말고 다른 드라마도 있었어요?
    25.07s  agent 발화 시작: 그렇죠.
    26.07s  agent 발화 끝
    26.44s  <ret> 발화 (turn10 첫 프레임)
    26.52s  agent 발화 시작: <ret> 네, '로앤오더'에도 출연했었죠.
    26.58s  user  발화 끝
    27.31s  ⚡SPAN 주입 [d'=0.86s / d_lead=3.46s]: Christopher Noth appeared in several episodes of Law & Order.
    29.84s  <ret> 발화 (turn11 첫 프레임)
    29.98s  agent 발화 시작: <ret> '로앤오더'에도 몇 번 출연하셨다고 해요.
    29.99s  agent 발화 끝
    30.80s  ⚡SPAN 주입(IRRELEVANT) [d'=0.96s / d_lead=2.72s]: The current temperature in Seoul is 28 degrees Celsius with a humidity
    31.16s  user  발화 시작: 아.
    31.56s  user  발화 끝
    32.70s  agent 발화 끝
    32.77s  user  발화 시작: 아, '로앤오더'도 재밌게 봤었는데… 이사 온 지 얼마 안 됐는데, 주변에 맛집 좀 알려줄 수 있어요?
    39.36s  <ret> 발화 (turn14 첫 프레임)
    39.72s  user  발화 끝
    39.87s  agent 발화 시작: <ret> 이사 오신 거 축하드려요! 맛집을 찾아볼까요?
    39.96s  ⚡SPAN 주입 [d'=0.60s / d_lead=3.51s]: (tool result) {"restaurants": [{"name": "고담", "cuisine": "양식", "rating
    43.37s  agent 발화 시작: 주변에 '고담'이라는 양식집과 '미담진'이라는 한식집이 있어요. 평점도 꽤 높네요. 둘 다 괜찮은 선택일 것
    43.38s  agent 발화 끝
    52.17s  agent 발화 끝
    53.27s  user  발화 시작: 음… '고담'이 좀 더 끌리네요. 혹시 예약도 가능해요?
    56.68s  <ret> 발화 (turn17 첫 프레임)
    57.10s  user  발화 끝
    57.22s  agent 발화 시작: <ret> 네, '고담'에 예약이 완료됐습니다. 예약 번호는 알 일 이 삼 사 오예요. 즐거운 식사 되세요!
    57.82s  ⚡SPAN 주입 [d'=1.13s / d_lead=7.13s]: (tool result) {"reservation id": "R12345", "status": "confirmed"}
    64.35s  agent 발화 끝
    65.35s  user  발화 시작: 와, 정말 고마워요! 덕분에…
    68.61s  user  발화 끝
    69.74s  user  발화 시작: …편하게 저녁 먹을 수 있겠네요.
    71.65s  agent 발화 시작: 천만에요! 도움이 되어서 기뻐요. 혹시 다른 필요한 건 없으세요?
    71.67s  user  발화 끝
    77.06s  agent 발화 끝
    77.12s  agent 발화 시작: 이사 오셨으니, 주변 편의시설 정보도 알아봐 드릴까요?
    81.55s  agent 발화 끝
