# v3_defer_10_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 안녕하세요. 런던에서 에든버러까지 가는 가장 좋은 방법이 뭘까요?
     4.05s  agent 발화 시작: 음, 그건 상황에 따라 다르죠. 속도를 중요하게 생각하세요, 아니면 풍경을 즐기고 싶으세요?
     4.05s  user  발화 끝
    10.12s  user  발화 시작: 풍경이요, 당연히요. 급한 일은 없어요.
    10.12s  agent 발화 끝
    12.65s  agent 발화 시작: 아, 좋은 선택이에요. 그럼 기차를 추천해요. 동해안을 따라 가는 멋진 여정이에요.
    12.65s  user  발화 끝
    18.22s  user  발화 시작: 직행 기차인가요?
    18.22s  agent 발화 끝
    19.24s  agent 발화 시작: <ret> 네, 맞아요. LNER에서 런던 킹스크로스역에서 에든버러 웨이벌리역까지 약 네 시간 이십 분 정도
    19.24s  <ret> 발화 (turn5 첫 프레임)
    19.24s  user  발화 끝
    20.24s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.52s]: (tool result) LNER operates direct trains from London King’s Cross to 
    29.87s  user  발화 시작: 네 시간 이십 분… 괜찮네요. 비행기는 어때요? 비교가 되나요?
    29.87s  agent 발화 끝
    34.42s  agent 발화 시작: <ret> 당연히 더 빨라요. 비행기는 약 한 시간 십오 분 정도 걸리고, 브리티시 에어웨이즈와 이지젯에서 
    34.42s  <ret> 발화 (turn7 첫 프레임)
    34.42s  user  발화 끝
    34.82s  ⚡SPAN 주입 [d'=0.40s / d_lead=1.52s]: (tool result) Flights from London to Edinburgh take approximately one 
    47.58s  user  발화 시작: 흠… 그럴 수도요. 지금 에든버러 날씨는 어떤가요?
    47.58s  agent 발화 끝
    51.13s  agent 발화 시작: <ret> 잠시 확인해 볼게요. 에든버러는 현재 섭씨 12도이고 흐리며, 비가 올 확률은 60%이고 서풍이 
    51.13s  <ret> 발화 (turn9 첫 프레임)
    51.13s  user  발화 끝
    52.13s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.04s]: (tool result) The current weather in Edinburgh is 12 degrees Celsius, 
    62.77s  user  발화 시작: 비가 올 확률이 60%… 아, 그럼 좋은 책을 가져가야겠네요.
    62.77s  agent 발화 끝
    67.32s  agent 발화 시작: 정말 현명한 생각이에요. 긴 여정에는 좋은 동반자가 필요해요—물론 책 속에서도요.
    67.32s  user  발화 끝
    72.39s  user  발화 시작: 추천해 주실 만한 책이 있나요? 뭔가… 흥미진진한 걸 읽고 싶어요.
    72.39s  agent 발화 끝
    77.45s  agent 발화 시작: 아, 요즘 좋은 스릴러를 몇 권 읽었어요. 타나 프렌치의 작품을 읽어 보셨어요? 정말 훌륭해요.
    77.45s  user  발화 끝
    84.54s  user  발화 시작: 타나 프렌치… 아니요, 그런 작가는 처음 들어봐요. 그녀의 책은 어떤가요?
    84.54s  agent 발화 끝
    89.60s  agent 발화 시작: <ret> 그녀는 분위기를 잘 살리는 작가예요. 타나 프렌치는 주로 아일랜드에서 펼쳐지는 심리 스릴러를 쓰고
    89.60s  <ret> 발화 (turn15 첫 프레임)
    89.60s  user  발화 끝
    90.60s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.53s]: (tool result) Tana French is an Irish author known for her Dublin Murd
   106.30s  user  발화 시작: 좋네요. 한번 찾아봐야겠어요. [sigh] 아, 그런데 에든버러의 역사적인 술집에 대해 아세요?
   106.30s  agent 발화 끝
   111.87s  agent 발화 시작: 에든버러는 그런 곳이 아주 많아요! 역사가 깊은 도시라서 술집에도 그 역사가 고스란히 담겨 있답니다.
   111.87s  user  발화 끝
   118.96s  user  발화 시작: 네, 그런 얘기를 들었어요. 월터 스콧 경이 자주 찾았다는 술집을 찾고 있어요.
   118.96s  agent 발화 끝
   125.03s  agent 발화 시작: <ret> 그럼 디컨 브로디스 술집이요. 로열 마일 거리의 디컨 브로디스 선술집은 월터 스콧 경이 즐겨 찾던
   125.03s  <ret> 발화 (turn19 첫 프레임)
   125.03s  user  발화 끝
   125.35s  ⚡SPAN 주입 [d'=0.32s / d_lead=2.53s]: (tool result) Deacon Brodie’s Tavern, located on the Royal Mile in Edi
   139.20s  user  발화 시작: 도둑이라고요? 그건… 흥미롭네요. 스콧 경은 그걸 어떻게 생각했을까요?
   139.20s  agent 발화 끝
   143.25s  agent 발화 시작: [chuckle] 그는 그 아이러니를 꽤나 재미있어 했을 거라고 생각해요. 그는 좋은 이야기를 좋아했으니까요
   143.25s  user  발화 끝
   150.85s  user  발화 시작: 죄송하지만, 스코틀랜드 국립 박물관이 몇 시에 닫는지 아세요?
   150.85s  agent 발화 끝
   154.90s  agent 발화 시작: <ret> 오후 다섯 시에 닫아요. 스코틀랜드 국립 박물관은 매일 오전 열 시부터 오후 다섯 시까지 개관해요
   154.90s  <ret> 발화 (turn23 첫 프레임)
   154.90s  user  발화 끝
   155.86s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.02s]: (tool result) The National Museum of Scotland is open daily from 10:00
   165.02s  user  발화 시작: 다섯 시… 알겠습니다, 좋아요. 음, 혹시 보잉 747의 속도 지시계에 대한 정보를 찾아 주실 수 있나요?
   165.02s  agent 발화 끝
   173.12s  agent 발화 시작: 이제 *그건* 베테랑 조종사에게 물어봐야 할 질문이네요! 정말 흥미로운 장비예요.
   173.12s  user  발화 끝
   177.44s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) The Boeing 747 utilizes a pneumatic airspeed indicator s
   178.18s  agent 발화 시작: <ret> 잠시만요. 747은 공압 시스템을 사용하고, 총압과 정압의 차이를 측정하여 매듭(knots) 단위
   178.18s  agent 발화 끝
   188.31s  user  발화 시작: 와, 695매듭… 정말 빠르네요.
   188.31s  agent 발화 끝
   190.33s  agent 발화 시작: 정말 그래요. 하지만 평소 운항에서는 그렇게 빠르지는 않아요. 그래도 필요할 때 쓸 수 있다는 게 좋죠. 마
   190.33s  user  발화 끝
   202.99s  user  발화 시작: [happy] 좋은 비유네요. 이제 여행 준비를 훨씬 더 잘한 것 같아요.
   202.99s  agent 발화 끝
   208.55s  agent 발화 시작: 훌륭해요! 약간의 준비는 특히 여행할 때 큰 도움이 된답니다. 그리고 기억하세요, 가장 멋진 풍경은 언제나 
   208.55s  user  발화 끝
   218.68s  agent 발화 끝
